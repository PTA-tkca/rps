let Rock = document.getElementById("rock")
let Paper = document.getElementById("paper")
let Scissor = document.getElementById("scissor")
let choice =  document.getElementById("choice")
let Player = document.getElementById("player")
let Computer = document.getElementById("computer")
let rst = document.getElementById("reset")
let hum = 0;


Rock.onclick = function(){
    hum = 1;
    if(Choose() == 3){
        Player.textContent = Number(Player.textContent) + 1;
    }else if(Choose() == 2){
        Computer.textContent = Number(Computer.textContent) + 1; 
}
}

Paper.onclick = function(){
    hum = 2;
    if(Choose() == 1){
        Player.textContent = Number(Player.textContent) + 1;
    }else if(Choose() == 3){
        Computer.textContent = Number(Computer.textContent) + 1; 
    }
}

Scissor.onclick = function(){
    hum = 3;
    if(Choose() == 2){
        Player.textContent = Number(Player.textContent) + 1;
    }else if(Choose() == 1){
        Computer.textContent = Number(Computer.textContent) + 1; 
    }
}

function Choose(){
    let pc = Math.floor(Math.random() * 3) + 1;
    if(pc == 1){
        choice.textContent = "Rock"
    }else if(pc == 2){
        choice.textContent = "Paper"
    }else{
        choice.textContent = "Scissors"
    }
    return pc;
}

rst.onclick = function(){
    Player.textContent = 0;
    Computer.textContent = 0;
     choice.textContent = "";
}