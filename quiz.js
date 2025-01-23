function checkAnswer() {
    var correctAnswer ='4';


    let userAnswer= document.querySelector('quiz');
    if(userAnswer==correctAnswer) {
        var text=document.querySelector('p');
text.textContent = "correct! well done.";

    }
    else {
        var text=document.querySelector('p');
text.textContent = "that is incorrect! try again.";

    }
}
   var submit= document.getElementById('submit-answer');
   submit.addEventListener('click',checkAnswer);
