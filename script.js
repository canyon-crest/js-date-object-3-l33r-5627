// ============================================
//  Unit 8.8 – The Date Object
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() for the button.
//  Do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Day Name
// ============================================
// Display today's day name (e.g., "Monday") in the
// element with ID "warmUpDate".

// STEP 1: Create a new Date object using: let now = new Date();
let now = new Date();
let running = true;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = days[now.getDay()];
document.getElementById("warmUpDate").innerHTML = day;
// STEP 2: Use .getDay() to get the day of the week as a number.
//         Sunday = 0, Monday = 1, Tuesday = 2, ... Saturday = 6

// STEP 3: Create an array of day names:
//         let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
//                     "Thursday", "Friday", "Saturday"];

// STEP 4: Use the day number as an index to get the day name
//         from the array.

// STEP 5: Display the day name in the element with ID "warmUpDate"
//         using document.getElementById("warmUpDate").innerHTML


// ============================================
//  PART 1: Current Date Display
// ============================================
// Display the current date in the format: M/D/YYYY
// in the element with ID "myDate".
// Example: "4/2/2025" (no leading zeros)

// STEP 6: (Reusing the 'now' object from above)
// STEP 7: Get the month using .getMonth() (FIXED: added now.)
let month = now.getMonth() + 1;

// STEP 8: Get the day of the month using .getDate()
let dateNum = now.getDate();

// STEP 9: Get the year using .getFullYear()
let year = now.getFullYear();

// STEP 10: Build the date string: month + "/" + day + "/" + year
//          Display it in the element with ID "myDate"
document.getElementById("myDate").innerHTML = month + "/" + dateNum + "/" + year;


// ============================================
// PART 2: Elapsed Timer
// ============================================
// Build a timer that counts up from 0, updating every ~10ms.
// Display the elapsed time in seconds (e.g., "1.230") in
// the element with ID "myTimer".

// STEP 11: Record the start time using new Date().getTime()
let startTime = new Date().getTime(); 
let timerId;


// ============================================
//  PART 3: Start/Stop Toggle Button
// ============================================

// STEP 13: Create a variable to track whether the timer is currently running (declared above)
// STEP 12: Create a variable to hold the timer ID (for stopping later).
//          Use setInterval() with a delay of 10 milliseconds.
function startTimer() {
    // Clear any existing interval to prevent stacking bugs
    clearInterval(timerId); 
    
    timerId = setInterval(function() {
        // a) Get the current time: new Date().getTime()
        let currentTime = new Date().getTime();           
        // b) Calculate elapsed seconds: (currentTime - startTime) / 1000
        let elapsedSeconds = (currentTime - startTime) / 1000; 
        // c) Display the elapsed time using .toFixed(3) in the element with ID "myTimer"
        document.getElementById("myTimer").innerHTML = elapsedSeconds.toFixed(3);
    }, 10); 
}

// Automatically start the timer on page load (since button starts as "Stop")
startTimer();

// STEP 14: Add a click event listener to the button (ID "myBtn").
document.getElementById("myBtn").addEventListener("click", function() {
    if (running) {
        // a) If running is true: stop it
        clearInterval(timerId);
        this.innerHTML = "Start";
        running = false;
    } else {
        // b) If running is false: restart it from 0
        startTime = new Date().getTime();
        startTimer();
        this.innerHTML = "Stop";
        running = true;
    }
});