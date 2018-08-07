var paranoiaQuestions = [

];

function getparanoiaQuestions(count){
    var tmpArrayE = paranoiaQuestions.slice(paranoiaQuestions);
    var goE = [];

    if (paranoiaQuestions.length > 0) {
    var optionsE = Math.floor(Math.random() * paranoiaQuestions.length);
    var removedE = paranoiaQuestions.splice(optionsE,1);

	document.getElementById("btnText").innerHTML = "Next";
    document.getElementById("Challenge1").innerHTML = removedE;
    } else {
window.location.href = "EndParanoia.html"
    }
}


function Play(){
getparanoiaQuestions(1);
}