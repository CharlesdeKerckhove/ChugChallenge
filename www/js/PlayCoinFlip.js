var CoinFlip = [
"Heads",
"Tails"    
];

var turns = 0;
var choice;
var heads = document.getElementById("heads");
var tails = document.getElementById("tails");
function Play(){
    if (turns < 20){
        getCoinFlip();
        turns++;
        document.getElementById("btnText").innerHTML = "Next";
    }
    else {
        window.location.href = "EndCoinFlip.html";
    }
}


function getCoinFlip(){
    choice = Math.floor(Math.random() * 2);

        if (choice == 0){
            document.getElementById("Question1").innerHTML = CoinFlip[0];
            heads.style.visibility = 'visible';
            tails.style.visibility = 'hidden';
        }
        else{
            document.getElementById("Question1").innerHTML = CoinFlip[1];
            tails.style.visibility = 'visible';
            heads.style.visibility = 'hidden';
        }  
}