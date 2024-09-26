const words = [
    {word: "javascript", hint:"linguagem de programação para web"},
    {word: "programação", hint: "processo de escrever códigos."},
    {word: "desenvolvimento", hint: "criação de software."},
    {word: "computador", hint: "máquina eletrônica para processamento."}
];

let selectedWordObj = words[Math.floor(Math.random() * words.length)];
let selectedWord = selectedWordObj.word;
let guessedLetters =[];
let attempts = 6;

function displayWord(){
    const WordContainer = document.getElementById("word");
    WordContainer.innerHTML = selectedWord.split("").map(letter => (guessedLetters.includes(letter)? letter : "_")).join("");
}

function checkGameOver(){
    if (attempts === 0){
        document.getElementById("message").innerHTML = "VOCÊ PERDEU! A palavra era:" + selectedWord;
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("hintBtn").disabled = true;
        document.getElementById("restartBtn").style.display = "block";

    } else if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
        document.getElementById("message").innerHTML = "PARABÉNS, VOCÊ GANHOU!";
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("hintBtn").disabled = true;
        document.getElementById("restarBtn").style.display = "block";
        }
}

document.getElementById("guessBtn").addEventListener("click", () => {
    const letterInput = document.getElementById("letterInput");
    const letter = letterInput.value.toLowerCase();
    letterInput.value = "";

    if (letter && !guessedLetters.includes(letter)){
        guessedLetters.push(letter);
        if(!selectedWord.includes(letter)){
            attempts--;
        }
        displayWord();
        checkGameOver();
    }
});

document.getElementById("hintBtn").addEventListener("click", () => {
    document.getElementById("message").innerHTML = "DICA: " + selectedWordObj.hint;
});

document.getElementById("restartBtn").addEventListener("click", () => {
    selectedWordObj = words[Math.floor(match.random() * words.length)];
    selectedWord = selectedWordObj.word;
    guessedLetters = [];
    attempts = 6;
    document.getElementById("message").innerHTML = "";
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("hintBtn").disabled = false;
    document.getElementById("restartBtn").style.display = "none";
    dosplayWord();
});

//iniciar o jogo
displayWord();