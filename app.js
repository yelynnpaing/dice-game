
let playOneTurn = true;
let totalOne = 0 ;
let totalTwo = 0 ;
let message = document.getElementById("message");
let diceOne = document.getElementById("diceOne");
let diceTwo = document.getElementById("diceTwo");
let userOneScoreBg = document.querySelector(".userOneScoreBg");
let userTwoScoreBg = document.querySelector(".userTwoScoreBg");
let userOneScore = document.querySelector(".userOneScore");
let totalScoreOne = document.getElementById("totalScoreOne");
let totalScoreTwo = document.getElementById("totalScoreTwo");
let userTwoScore = document.querySelector(".userTwoScore");
let rollDice = document.getElementById("rollDice");
let resetGame = document.getElementById("resetGame");

rollDice.addEventListener("click", function(){
    //to produce random Number
    let randomNumber = Math.floor(Math.random()*6) + 1;
    let doubleRandomNumber = randomNumber + randomNumber;
    let randomDicePicOne = "images/dice" + randomNumber + ".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomDicePicOne);
    let randomDicePicTwo = "images/dice" + randomNumber + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomDicePicTwo);
    
    if(playOneTurn){
        // alert("player one rolled" + randomNumber)
        document.querySelectorAll("img")[0].setAttribute("src",randomDicePicOne);
        totalOne += doubleRandomNumber;
        totalScoreOne.textContent = totalOne;
        userOneScore.textContent = randomNumber;
        userOneScoreBg.classList.add("active");
        userTwoScoreBg.classList.remove("active");
        message.textContent = "Player 2 turn"

    }else{
        // alert("player Two rolled" + randomNumber)
        diceTwo = document.querySelectorAll("img")[1].setAttribute("src", randomDicePicTwo);
        totalTwo += doubleRandomNumber;
        totalScoreTwo.textContent = totalTwo;
        userTwoScore.textContent = randomNumber;
        userOneScoreBg.classList.remove("active");
        userTwoScoreBg.classList.add("active");
        message.textContent = "Player 1 Turn"

    }
    playOneTurn = !playOneTurn;
    // if(playOneTurn){
    //     playOneTurn = false
    // }else{
    //     playOneTurn = true
    // }

    if(totalOne >= 20){
        message.textContent = "Player 1 has Won !";
        rollDice.style.visibility = "hidden";
        resetGame.style.display = "block";
    }else if (totalTwo >= 20){
        message.textContent = "Player 2 has Won !";
        rollDice.style.visibility = "hidden";
        resetGame.style.display = "block";
    }

})
resetGame.addEventListener("click", function(){
    showData()
})
function showData(){
    message.textContent = "Player 1 turn ";
    userOneScore.textContent = 0;
    userTwoScore.textContent = 0 ;
    totalOne = 0;
    totalTwo = 0 ;
    totalScoreOne.textContent = "-";
    totalScoreTwo.textContent = "-";
    rollDice.style.visibility = "visible";
}
