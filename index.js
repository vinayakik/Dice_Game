function myScript(){
    dice=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
    diceNumber1=Math.floor(Math.random()*6);
    document.querySelector(".img1").setAttribute("src",dice[diceNumber1]);

    diceNumber2=Math.floor(Math.random()*6);
    document.querySelector(".img2").setAttribute("src",dice[diceNumber2]);

    if(diceNumber1>diceNumber2){
        document.querySelector("h1").innerText="🚩Player 1 wins";
    }
    else if(diceNumber2>diceNumber1){
        document.querySelector("h1").innerText="Player 2 wins🚩"
    }
    else{
        document.querySelector("h1").innerText="Draw!"
    }

    







}

