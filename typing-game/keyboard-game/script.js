// Pixel Painter — keyboard-driven pixel art game
// Author: Hasnain Ahmad <hasnainswati2004@gmail.com>
// Events used: keydown, keyup, keypress

document.addEventListener('DOMContentLoaded', ()=>{
  const cols = 20, rows = 12;
  const board = document.getElementById('board');
  const scoreEl = document.getElementById('score');
  const levelEl = document.getElementById('level');
  const matchedEl = document.getElementById('matched');
  const targetCountEl = document.getElementById('targetCount');
  const timeEl = document.getElementById('time');
  const clearBtn = document.getElementById('clear');
  const newLevelBtn = document.getElementById('newLevel');

  board.style.gridTemplateColumns = `repeat(${cols}, var(--cell))`;
  board.style.gridGap = 'var(--gap)';

  let grid = [];
  let target = [];
  let cursor = {x:0,y:0};
  let color = '#ff4757';
  let score = 0, matched = 0, level = 1;
  let timer = 0, timerId = null;

  function mkGrid(){
    board.innerHTML='';
    grid = Array(rows).fill(null).map(()=>Array(cols).fill(''));
    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        const el = document.createElement('div');
        el.className='cell';
        el.dataset.r=r; el.dataset.c=c;
        board.appendChild(el);
      }
    }
  }

  function randTarget(){
    target = Array(rows).fill(null).map(()=>Array(cols).fill(''));
    const needed = Math.min(40, 8+level*4);
    const colors = ['#ff4757','#2ed573','#1e90ff','#ffd32a','#ffffff'];
    let placed=0;
    while(placed<needed){
      const r = Math.floor(Math.random()*rows);
      const c = Math.floor(Math.random()*cols);
      if(!target[r][c]){ target[r][c]=colors[Math.floor(Math.random()*colors.length)]; placed++; }
    }
    targetCountEl.textContent = placed;
  }

  function render(){
    const cells = board.children;
    matched = 0;
    for(let i=0;i<cells.length;i++){
      const el = cells[i];
      const r = +el.dataset.r, c = +el.dataset.c;
      const fill = grid[r][c];
      el.style.background = fill || '#071229';
      el.classList.toggle('cursor', r===cursor.y && c===cursor.x);
      // show faint target overlay
      if(target[r][c]){ el.classList.add('target'); el.style.boxShadow = `inset 0 0 0 2px ${target[r][c]}33`; }
      else { el.classList.remove('target'); el.style.boxShadow='none'; }
      if(fill && target[r][c] && fill.toLowerCase()===target[r][c].toLowerCase()) matched++;
    }
    scoreEl.textContent = score;
    matchedEl.textContent = matched;
    levelEl.textContent = level;
  }

  function paintAt(x,y, col){
    if(x<0||y<0||x>=cols||y>=rows) return;
    grid[y][x]=col;
    // scoring: +1 for painting a matching target cell
    if(target[y][x] && target[y][x].toLowerCase()===col.toLowerCase()) score++;
  }

  function advanceIfComplete(){
    const needed = parseInt(targetCountEl.textContent,10)||0;
    if(matched>=needed && needed>0){ level++; score+=10; randTarget(); mkGrid(); render(); }
  }

  function startTimer(){
    timer=0; clearInterval(timerId);
    timerId=setInterval(()=>{ timer++; const mm = String(Math.floor(timer/60)).padStart(2,'0'); const ss=String(timer%60).padStart(2,'0'); timeEl.textContent=`${mm}:${ss}`; },1000);
  }

  // Event handling: keydown for movement + paint, keypress for character keys, keyup for releases
  document.addEventListener('keydown', (e)=>{
    if(e.key.startsWith('Arrow')){
      e.preventDefault();
      if(e.key==='ArrowLeft') cursor.x = Math.max(0, cursor.x-1);
      if(e.key==='ArrowRight') cursor.x = Math.min(cols-1, cursor.x+1);
      if(e.key==='ArrowUp') cursor.y = Math.max(0, cursor.y-1);
      if(e.key==='ArrowDown') cursor.y = Math.min(rows-1, cursor.y+1);
    }

    // Space paints the current cell
    if(e.code==='Space'){
      e.preventDefault();
      paintAt(cursor.x,cursor.y,color);
    }

    // Shift+Arrows: jump by 3
    if(e.shiftKey && e.key.startsWith('Arrow')){
      if(e.key==='ArrowLeft') cursor.x = Math.max(0, cursor.x-3);
      if(e.key==='ArrowRight') cursor.x = Math.min(cols-1, cursor.x+3);
      if(e.key==='ArrowUp') cursor.y = Math.max(0, cursor.y-3);
      if(e.key==='ArrowDown') cursor.y = Math.min(rows-1, cursor.y+3);
    }

    // Enter starts a new level
    if(e.key==='Enter'){ startTimer(); randTarget(); mkGrid(); render(); }

    render(); advanceIfComplete();
  });

  document.addEventListener('keypress', (e)=>{
    // color keys: r,g,b,y,k
    const k = e.key.toLowerCase();
    if(k==='r') color='#ff4757';
    if(k==='g') color='#2ed573';
    if(k==='b') color='#1e90ff';
    if(k==='y') color='#ffd32a';
    if(k==='k') color='#ffffff';
    // 'p' toggles paint-mode (auto-paint while moving)
    if(k==='p') paintToggle = !paintToggle;
  });

  let paintToggle = false;
  document.addEventListener('keyup', (e)=>{
    // releasing space stops continuous paint feedback (no-op here) but used to show keyup handling
    if(e.code==='Space'){
      // visual feedback: flash the cursor cell
      const idx = cursor.y*cols+cursor.x; const el = board.children[idx];
      if(el){ el.style.transform='scale(0.98)'; setTimeout(()=>el.style.transform='scale(1)',80); }
    }
  });

  // Board click allows mouse paint too
  board.addEventListener('click',(ev)=>{
    const el = ev.target.closest('.cell'); if(!el) return;
    const r = +el.dataset.r, c = +el.dataset.c; cursor={x:c,y:r}; paintAt(c,r,color); render(); advanceIfComplete();
  });

  clearBtn.addEventListener('click', ()=>{ mkGrid(); score=0; render(); });
  newLevelBtn.addEventListener('click', ()=>{ level++; randTarget(); mkGrid(); render(); });

  // initialize
  mkGrid(); randTarget(); render();
});
