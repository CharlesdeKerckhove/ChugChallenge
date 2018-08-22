var docRef = firebase.database();

var uploadStatus = document.querySelector("#uploadStatus");

var NeverQuestionRef = docRef.ref("/Game Type/Never Have I Ever/Questions");
var ChugRRef = docRef.ref("/Game Type/Chug Challenge/Rules");
var ChugQRef = docRef.ref("/Game Type/Chug Challenge/Questions");
var EroQRef = docRef.ref("/Game Type/Erotic End Game/Questions");
var ParanoiaQRef = docRef.ref("/Game Type/Paranoia/Questions");

var InputNeverQuestion = document.querySelector("#InputNeverQ");
var InputChugR = document.querySelector("#InputChugR");
var InputChugQ = document.querySelector("#InputChugQ");
var InputEroQ = document.querySelector("#InputEroQ");
var InputParanoiaQ = document.querySelector("#InputParanoiaQ");

var uploadNeverQuestion = document.querySelector("#uploadNeverQ");
var uploadChugR = document.querySelector("#uploadChugR");
var uploadChugQ = document.querySelector("#uploadChugQ");
var uploadEroQ = document.querySelector("#uploadEroQ");
var uploadParanoiaQ = document.querySelector("#uploadParanoiaQ");

uploadNeverQuestion.addEventListener("click", function() {
    var InputtedNeverQ = InputNeverQuestion.value;
    console.log("I am going to upload " + InputtedNeverQ + " to Database");
    NeverQuestionRef.push().set(InputtedNeverQ)
    .then(function(){
        console.log("Question Uploaded!");
    }).catch(function (error){
        console.log("Got an error: ", error);
    });
    uploadStatus.innerHTML = "Question Upload Complete";
    setTimeout(function () {
       //Redirect with JavaScript
       window.location.href= 'admin.html';
    }, 2000);
});
uploadChugR.addEventListener("click", function() {
    var InputtedChugR = InputChugR.value;
    console.log("I am going to upload " + InputtedChugR + " to Database");
    ChugRRef.push().set(InputtedChugR)
    .then(function(){
        console.log("Question Uploaded!");
    }).catch(function (error){
        console.log("Got an error: ", error);
    });
    uploadStatus.innerHTML = "Question Upload Complete";
    setTimeout(function () {
       //Redirect with JavaScript
       window.location.href= 'admin.html';
    }, 2000);
});
uploadChugQ.addEventListener("click", function() {
    var InputtedChugQ = InputChugQ.value;
    console.log("I am going to upload " + InputtedChugQ + " to Database");
    ChugQRef.push().set(InputtedChugQ)
    .then(function(){
        console.log("Question Uploaded!");
    }).catch(function (error){
        console.log("Got an error: ", error);
    });
    uploadStatus.innerHTML = "Question Upload Complete";
    setTimeout(function () {
       //Redirect with JavaScript
       window.location.href= 'admin.html';
    }, 2000);
});
uploadEroQ.addEventListener("click", function() {
    var InputtedEroQ = InputEroQ.value;
    console.log("I am going to upload " + InputtedEroQ + " to Database");
    EroQRef.push().set(InputtedEroQ)
    .then(function(){
        console.log("Question Uploaded!");
    }).catch(function (error){
        console.log("Got an error: ", error);
    });
    uploadStatus.innerHTML = "Question Upload Complete";
    setTimeout(function () {
       //Redirect with JavaScript
       window.location.href= 'admin.html';
    }, 2000);
});
uploadParanoiaQ.addEventListener("click", function() {
    var InputtedParanoiaQ = InputParanoiaQ.value;
    console.log("I am going to upload " + InputtedParanoiaQ + " to Database");
    ParanoiaQRef.push().set(InputtedParanoiaQ)
    .then(function(){
        console.log("Question Uploaded!");
    }).catch(function (error){
        console.log("Got an error: ", error);
    });
    uploadStatus.innerHTML = "Question Upload Complete";
    setTimeout(function () {
       //Redirect with JavaScript
       window.location.href= 'admin.html';
    }, 2000);
});
var QuitBtn = document.getElementById("QuitBtn");
QuitBtn.addEventListener('click', function(){
                          window.location.href='../index.html'
                          });