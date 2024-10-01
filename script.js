const words = [
    {word: "javascript", hint:"linguagem de programação para web"},
    {word: "programação", hint: "processo de escrever códigos."},
    {word: "desenvolvimento", hint: "criação de software."},
    {word: "computador", hint: "máquina eletrônica para processamento."},
    {word: "algoritmo", hint: "sequência de passos para resolver um problema"},
    {word: "debug", hint: "processo de encontrar e corrigir erros em um programa"},
    {word: "interface", hint: "meio de comunicação entre usuário e sistema"},
    {word: "variável", hint: "armazenamento temporário de dados no código"},
    {word: "compilador", hint: "Software que converte código para linguagem de máquina"},
    {word: "framework", hint: "conjunto de ferramentas para desenvolvimento de software"},
    {word: "banco_de_dados", hint: "armazenamento organizado de informções"},
];
  

let selectedWordObj = words[Math.floor(Math.random() * words.length)];
let selectedWord = selectedWordObj.word;
let guessedLetters =[];
let attempts = 6;

function displayWord(){
    const WordContainer = document.getElementById("word");
    WordContainer.innerHTML = selectedWord.split("").map(letter => (guessedLetters.includes(letter)? letter : "_")).join("");
}

function updateHangman(){
    const hangmanContainer=document.getElementById("hangman");
    const stages = [
        "",
        "____<br>|        |<br>|        |<br>|        O<br>|       /|\\<br>|       / <br>|<br>",
        "____<br>|        |<br>|        |<br>|        O<br>|       /|\\<br>|<br>|<br>",
        "____<br>|        |<br>|        |<br>|        O<br>|       /<br>|<br>|<br>",
        "____<br>|        |<br>|        |<br>|        O<br>|<br>|<br>|<br>",
        "____<br>|        |<br>|        |<br>|<br>|<br>|<br>|<br>",
        "____<br>|        |<br>|<br>|<br>|<br>|<br>|<br>|<br>",
      ];
      hangmanContainer.innerHTML = stages[attempts];
    }

function checkGameOver(){
    if (attempts === 0){
        document.getElementById("message").innerHTML = " <br> VOCÊ PERDEU! A palavra era: <br>" + selectedWord;
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("hintBtn").disabled = true;
        document.getElementById("restartBtn").style.display = "block";

    } else if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
        document.getElementById("message").innerHTML = " <br> PARABÉNS, VOCÊ GANHOU! <br>";
        document.getElementById("guessBtn").disabled = true;
        document.getElementById("hintBtn").disabled = true;
        document.getElementById("restartBtn").style.display = "block";
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
        updateHangman();
        checkGameOver();
    }
});

document.getElementById("hintBtn").addEventListener("click", () => {
    document.getElementById("message").innerHTML = "DICA: " + selectedWordObj.hint;
});

document.getElementById("restartBtn").addEventListener("click", () => {
    location.reload();
});

//iniciar o jogo
displayWord();
updateHangman();