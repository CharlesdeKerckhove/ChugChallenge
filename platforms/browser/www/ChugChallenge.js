var myArray = [
'Left hand drinking',
'No names',
'No pointing',
'No swearing',
'Partners - select a partner and match their drinks',
'Pinky up as you drink',
'Little green man - remove before drinking and replace after drinking',
'No eye contact with challenger',
'Word Ban: Yes & no',
'Word Ban: Drink',
'Word Ban: Mine',
'No teeth can be shown whilst laughing',
'Replace "Now" with "Meow"',
'Must address others as Sir and Maam',
'Empty glasses - Once a drink has been finished tap the glass on your shoulder',
'No phones',
'Say I love you after every sentence'
];

var intro = "Complete the challenge or take a shot."

function getIntro(){
	y = intro;
	document.getElementById("Intro1").innerHTML = y;
}
var intro2 = "When complete, pass the phone to the next challenger."

function getIntro2(){
	y = intro2;
	document.getElementById("Intro2").innerHTML = y;
}

function getRules(count){

    var tmpArray = myArray.slice(myArray);
    var go = [];

    for (var i = 0; i < count; i++) {
    var options = Math.floor(Math.random() * tmpArray.length);
    var removed = tmpArray.splice(options,1);

    go.push(removed[0]);
    }
document.getElementById("Rule1").innerHTML = "1) " + " " + go[0];
document.getElementById("Rule2").innerHTML = "2) " + " " + go[1];
}


getIntro();
getIntro2();
getRules(2);