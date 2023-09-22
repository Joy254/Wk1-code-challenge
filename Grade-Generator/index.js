function calculateGrade() {
    const score = parseInt(document.getElementById("score").value);

    let grade; // Declare a variable to hold the calculated grade.
    let errorMessage = ""; // Initialize an empty error message.

    // Check if the input score is within the valid range (0 to 100).
    if (score >= 0 && score <= 100) {
        // Use conditional statements to determine the grade based on the score.
        if (score > 79) {
            grade = "A";
        } else if (score >= 60) {
            grade = "B";
        } else if (score >= 50) {
            grade = "C";
        } else if (score >= 40) {
            grade = "D";
        } else {
            grade = "E";
        }
    } 
    // else {
    //     errorMessage = "Invalid Score, Score must be between 0 and 100.";
    // }

    // // Update the result element in the HTML with the calculated grade or error message.
    // if (errorMessage === "") {
    //     document.getElementById("result").innerHTML = `Student grade is: ${grade}`;
    // } else {
    //     document.getElementById("result").innerHTML = errorMessage;
    // }
}

//Prompt student to input the mark scored
let marks = prompt("Enter Marks");
let grade =calculateGrade (marks);

//output the grade scored
alert(`You scored grade: ${grade}`);
