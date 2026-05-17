// ============================================================
// JavaScript Fundamentals — Practice Exercises
// Topics: Data Types · Functions · Control Flow · Arrays & Loops
// ============================================================

// ── 1. DATA TYPES ─────────────────────────────────────────────

// Primitive types
const playerName   = "Ali";          // string
const playerScore  = 0;              // number
const isGameOver   = false;          // boolean
const highScore    = null;           // null  (intentionally empty)
let   lastMessage;                   // undefined (declared, not assigned)

// typeof examples
console.log(typeof playerName);   // "string"
console.log(typeof playerScore);  // "number"
console.log(typeof isGameOver);   // "boolean"
console.log(typeof lastMessage);  // "undefined"

// Template literal
const greeting = `Welcome, ${playerName}! Your score is ${playerScore}.`;
console.log(greeting);

// Type coercion awareness
console.log("5" + 2);   // "52"  — string wins
console.log("5" - 2);   // 3     — arithmetic forces number
console.log(Boolean(0), Boolean(""), Boolean(null)); // false false false (falsy values)


// ── 2. FUNCTIONS & METHODS ────────────────────────────────────

// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Default parameters
function greet(name = "stranger") {
  return `Hello, ${name}!`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// String methods
const sentence = "  JavaScript is awesome!  ";
console.log(sentence.trim());              // remove whitespace
console.log(sentence.trim().toUpperCase()); // chain methods
console.log(sentence.includes("awesome")); // true
console.log(sentence.replace("awesome", "powerful")); // swap word

// Number methods
const pi = 3.14159;
console.log(pi.toFixed(2));          // "3.14"
console.log(Math.round(pi));         // 3
console.log(Math.max(10, 22, 7));    // 22
console.log(Math.floor(Math.random() * 6) + 1); // random die roll 1-6

// Testing our functions
console.log(add(3, 4));          // 7
console.log(multiply(5, 6));     // 30
console.log(greet());            // Hello, stranger!
console.log(greet("Ali"));       // Hello, Ali!
console.log(sum(1, 2, 3, 4, 5)); // 15


// ── 3. MAKING DECISIONS ───────────────────────────────────────

// if / else if / else
function getLetterGrade(score) {
  if (score >= 90)      return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else                  return "F";
}

// Ternary operator
const age       = 17;
const canVote   = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`); // Can vote: No

// Switch statement
function getDayType(day) {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      return "Weekend";
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Weekday";
    default:
      return "Unknown day";
  }
}

// Logical operators
const hasTicket  = true;
const isAdult    = false;
const canEnter   = hasTicket && isAdult;  // false — both must be true
const hasAccess  = hasTicket || isAdult;  // true  — either works
const isDenied   = !canEnter;             // true

console.log(getLetterGrade(85));       // B
console.log(getDayType("Saturday"));   // Weekend
console.log(`canEnter: ${canEnter}, hasAccess: ${hasAccess}`);


// ── 4. ARRAYS & LOOPS ─────────────────────────────────────────

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Basic array methods
fruits.push("fig");           // add to end
fruits.unshift("avocado");    // add to start
const removed = fruits.pop(); // remove from end → "fig"
console.log(fruits);
console.log(`Removed: ${removed}`);

// Searching
console.log(fruits.includes("cherry"));   // true
console.log(fruits.indexOf("banana"));    // index of banana
console.log(fruits.find(f => f.startsWith("c"))); // "cherry"

// for loop — classic
for (let i = 0; i < 3; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// for...of loop — cleaner
for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}

// Array higher-order methods
const scores = [45, 82, 91, 60, 73, 88, 55];

const passing    = scores.filter(s => s >= 60);          // keep ≥ 60
const doubled    = scores.map(s => s * 2);               // transform each
const total      = scores.reduce((acc, s) => acc + s, 0); // sum all
const average    = (total / scores.length).toFixed(1);

console.log("Passing scores:", passing);
console.log("Doubled:", doubled);
console.log(`Total: ${total}, Average: ${average}`);

// forEach loop
passing.forEach((score, index) => {
  console.log(`  Pass ${index + 1}: ${score} → Grade ${getLetterGrade(score)}`);
});

// Spread operator and destructuring
const [first, second, ...rest] = fruits;
console.log(`First: ${first}, Second: ${second}, Others:`, rest);

const moreFruits = [...fruits, "grape", "honeydew"];
console.log(`Total fruits: ${moreFruits.length}`);

// while loop
let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}
console.log("Blast off! 🚀");
