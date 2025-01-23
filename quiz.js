function checkAnswer() {
    // Declare and assign the correct answer
    var correctAnswer = "4";
    
    // Retrieve the user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener('click', checkAnswer);
