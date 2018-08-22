var docRef = firebase.database();
var QuitBtn = document.getElementById("QuitParanoiaBtn");
QuitBtn.addEventListener('click', function(){
                          window.location.href='index.html'
                          });
var ParanoiaQuestionRef = docRef.ref("/Game Type/Paranoia/Questions");
var allQuestions = [];

ParanoiaQuestionRef.once('value', function(data){
    data.forEach(function(item){
        allQuestions.push(item.val());
     });
});

function getmyQuestions(count){
    var tmpArrayE = allQuestions.slice(allQuestions);
    var goE = [];

    if (allQuestions.length > 0) {
    var optionsE = Math.floor(Math.random() * allQuestions.length);
    var removedE = allQuestions.splice(optionsE,1);

	document.getElementById("NextParanoiaBtn").innerHTML = "Next";
    document.getElementById("ParanoiaQuestion").innerHTML = removedE;
    } else {
window.location.href = "EndParanoia.html"
    }
}


function Play(){
getmyQuestions(1);
}