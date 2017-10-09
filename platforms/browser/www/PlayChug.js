var myChallenges = [
'Down your drink',
'Down your drink',
'Down your drink',
'Give the person to your left your drink',
'Slut drop on the person to your right',
'Pick someone to drink five times',
'Pick someone to drink two times',
'Pick someone to drink three times',
'Take a shot',
'Take a shot',
'Take a shot',
'Kiss the person to your right',
'Kiss the person to your left',
'Mix the person to your lefts drink',
'Drink five sips',
'Drink two sips',
'Drink three sips',
'Drink four sips',
'Drink ten sips',
'Hand out five sips',
'Hand out two sips',
'Hand out three sips',
'Hand out four sips',
'Hand out ten sips',
'Let someone else send a message from your phone',
'Take off an item of clothing',
'Slap someone',
'Swap places with the person opposite you',
'Insult the person to your right',
'Insult the person to your left',
'Compliment the person to your left',
'Compliment the person to your right',
'Motorboat the person to your right',
'If you would have sex with the person to your right drink four times'
];

function getMyChallenges(count){
var random = myChallenges[Math.floor(Math.random()*myChallenges.length)];
document.getElementById("btnText").innerHTML = "Next";
document.getElementById("Challenge1").innerHTML = random;
}

var everyoneChallenges = [
'Tell the group the best place you have had sex',
'What is your favourite sex position',
'Pick a number between 1-10, everyone else must guess and whoever guesses right gives out five sips',
'Give the person to your right a nickname which you must use for the rest of the game',
'Give out two sips if you are wearing black otherwise take two sips',
'Tell the group an embarrassing story',
'Tell the group a sex position you want to try',
'Sing a lyric from a song, if nobody can name the song name drink twice',
'If you were trapped on a desert island with one person from this game who would it be?',
'Guess what the person to your left is self conscious about, if you are right give out two sips otherwise take five sips',
'Who do you think is the worst dressed?',
'Who do you think is the ugliest?',
'Who do you think has the biggest penis?',
'Who do you think has the best looking sibling?',
'Who is your celebrity crush?',
'Who is your same sex celebrity crush?',
'What is your favourite porn category?',
'How often do you watch porn?',
'What is the ideal amount of sex in a week?',
'What is your weirdest fetish?',
'Do you prefer the person to your left or the person to your right?',
'EVERYONE: Who ever has the biggest biceps take a drink',
'EVERYONE: Who ever shaved their pubes last take a drink',
'EVERYONE: Take a sip for each sexual partner you have had',
'EVERYONE: Drink if you have masturbated before',
'EVERYONE: Drink if you have cheated on your partner before',
'EVERYONE: Drink if you have fallen in love before',
'EVERYONE: Drink if you have been in a fight',
'EVERYONE: Whoever has the biggest boobs drink two sips',
'EVERYONE: Whoever has the best looking mum drink five times',
'EVERYONE: Whoever has the best looking dad drink five times',
'EVERYONE: Whoever has the best looking sister drink five times',
'EVERYONE: Whoever has the best looking brother drink five times',
'EVERYONE: Drink if you have sent nudes before',
'EVERYONE: Drink if you have a tattoo',
'EVERYONE: Drink if you have a piercing',
'EVERYONE: Drink if you have had an STD before',
'EVERYONE: Drink if you have had a pregnancy scare before',
'EVERYONE: Drink if you have caught a family member having sex',
'EVERYONE: Drink if you have been caught masturbating',
'EVERYONE: Drink if you have been caught having sex',
'EVERYONE: Drink if you have been caught performing oral',
'EVERYONE: Drink if you have ever kissed someone of the same gender',
'EVERYONE: Drink twice if you have slept naked',
'EVERYONE: What is the weirdest place challengers have had sex',
'EVERYONE: Everyone younger than the challenger drink',
'EVERYONE: Drink if you have ever thrown up from drinking',
'EVERYONE: Decide who the best looking person in the group is and they must drink five sips',
'EVERYONE: Whoever turned up late drink five times',
'EVERYONE: Decide who has the best fashion sense, they can give out five sips',
'EVERYONE: Decide who is the ladies man of the group, they can give out five sips',
'EVERYONE: Drink twice if you have sent someone else to the hospital',
'EVERYONE: Drink twice if you have been to A&E before',
'EVERYONE: Shortest player give out two sips',
'EVERYONE: Tallest player give out four sips',
'EVERYONE: Drink five sips',
'EVERYONE: Drink three sips',
'EVERYONE: Drink two sips',
'EVERYONE: Hand out two sips',
'EVERYONE: Next person to use their phone drinks eight sips (excluding the use of this app)',
'EVERYONE: Anyone who has more than half their drink left take 15 sips'
];

function getEveryoneChallenges(count){
    var tmpArrayE = everyoneChallenges.slice(everyoneChallenges);
    var goE = [];

    if (everyoneChallenges.length > 45) {
    var optionsE = Math.floor(Math.random() * everyoneChallenges.length);
    var removedE = everyoneChallenges.splice(optionsE,1);

	document.getElementById("btnText").innerHTML = "Next";
    document.getElementById("Challenge1").innerHTML = removedE;
    } else {
window.location.href = "EndChug.html"
    }
}


function Select(){
var questionTypes = [
    getMyChallenges,
	getEveryoneChallenges
];
var rand = questionTypes[Math.floor(Math.random()*questionTypes.length)];
rand(1);
}