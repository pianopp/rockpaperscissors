var playerScores = {
    player: 0,
    computer: 0
}
document.getElementById("demo").innerHTML = playerScores.player + "," + playerScores.computer;

const options = ["ROCK", "PAPER", "SCISSORS"] // 
const compOptions = ["Rock", "Paper", "Scissors"]

function playRound(playerSelection, computerSelection) {
    var result = [playerSelection, computerSelection];
    var playerVal = options.indexOf(playerSelection.toUpperCase());
    var compVal = compOptions.indexOf(computerSelection);
    var checkWinner = findWinner(compVal, playerVal);
    if (!checkPlayerinput()) {
        return "Invalid input Try Again"
    };
    if (checkWinner === 0) {
        playerScores.computer++
            document.getElementById("demo").innerHTML = playerScores.player + "," + playerScores.computer;
        document.getElementById("demo3").innerHTML = compOptions[playerVal] + " loses to " + compOptions[compVal];
    } else if (checkWinner === 1) {
        playerScores.player++
            document.getElementById("demo").innerHTML = playerScores.player + "," + playerScores.computer;
        document.getElementById("demo3").innerHTML = compOptions[playerVal] + " beats " + compOptions[compVal];
    } else {
        document.getElementById("demo3").innerHTML = 'It\'s a tie!';
    }
    console.log(result, playerVal, compVal, checkWinner)
    return result

}

function findWinner(a, b) {
    return ((a + 1) - (b + 1) + 5) % 3
}

function checkPlayerinput() {
    var checkInput = playerSelection.toUpperCase()
    return options.includes(checkInput)
}

function playerPLay() {

}

function computerPlay() {

    var compChoice = getRandomIntInclusive(0, 2)
    return compOptions[compChoice]
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const playerSelection = prompt("Rock, Paper or Scissors");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))