// Initialize Firebase
var config = {
apiKey: "AIzaSyB5tgQuvhtVY-sJu5IW0kUnHZAEeYkzBE8",
authDomain: "chug-challenges.firebaseapp.com",
databaseURL: "https://chug-challenges.firebaseio.com",
projectId: "chug-challenges"
};
firebase.initializeApp(config);
var docRef = firebase.database();
var QuitBtn = document.getElementById("QuitNeverBtn");
QuitBtn.addEventListener('click', function(){
                          window.location.href='index.html'
                          });
var NeverQuestionRef = docRef.ref("/Game Type/Never Have I Ever/Questions");
var allQuestions = [];

NeverQuestionRef.once('value', function(data){
    data.forEach(function(item){
        allQuestions.push(item.val());
     });
});

/*var myQuestions = [
'Never have I ever called in sick to work because I was hungover',
'Never have I ever had a near death experience',
'Never have I ever flashed a bartender for a free drink',
'Never have I ever called someone the wrong name during sex',
'Never have I ever made out with a stranger',
'Never have I ever eaten food out of a bin',
'Never have I ever eaten food off the floor',
'Never have I ever talked to myself out loud in public',
'Never have I ever farted and blamed someone else',
'Never have I ever lied about my "number" to avoid judgement',
    //
'Never have I ever given or received a lap dance',
'Never have I ever slept with my best friend',
'Never have I ever sent a dirty text to the wrong person',
'Never have I ever listened to Nickleback',
'Never have I ever peed myself in public as an adult',
'Never have I ever been to a swingers party with my spouse',
'Never have I ever snuck into a private party',
'Never have I ever been in handcuffs, for any reason',
'Never have I ever had sex with someone twice my age',
'Never have I ever gone skinny dipping',
'Never have I ever sniffed my underwear to see if its clean or dirty',
'Never have I ever had a pregnancy scare',
'Never have I ever fooled around with a family member',
'Never have I ever had an STD scare',
'Never have I ever dined and dashed',
'Never have I ever said "I love you" just to have sex with someone',
'Never have I ever been slapped across the face',
'Never have I ever had sex with a friends parent, or parents',
'Never have I ever gone to work high',
'Never have I ever gone to work drunk',
'Never have I ever used a common household item as a sex toy and put it back where it belongs',
'Never have I ever blown a line of cocaine off of someones body',
'Never have I ever deleted a post on social media because I had a low percentage of "likes"',
'Never have I ever had to do the walk of shame',
'Never have I ever woken up in a strange place without remembering how I got there',
'Never have I ever received or initiated a booty call',
'Never have I ever taken nude pictures of a friend',
'Never have I ever puked on someone while hooking up with them',
'Never have I ever committed a hit-and-run',
'Never have I ever eaten a piece of gum found underneath a table',
'Never have I ever kissed a cousin',
'Never have I ever slurred a racist remark toward someone',
'Never have I ever grabbed a random womans ass without permission',
'Never have I ever grabbed a mans penis without permission',
'Never have I ever farted in someones face',
'Never have I ever worn underwear two or more days in a row',
'Never have I ever punched someone',
'Never have I ever eaten my snot',
'Never have I ever participated in a protest',
'Never have I ever licked someones butt',
'Never have I ever broken a mirror',
'Never have I ever binge-watched a TV show',
'Never have I ever crashed a car',
'Never have I ever slept with someone because I thought they were a celebrity',
'Never have I ever been lied to for sex',
'Never have I ever lied for sex',
'Never have I ever been in a fight',
'Never have I ever kissed my friends significant other',
'Never have I ever cried while drunk',
'Never have I ever believed in a conspiracy theory',
'Never have I ever shattered my phone screen',
'Never have I ever used a dog/baby to attract women',
'Never have I ever smoked in an establishment that was "non-smoking"',
'Never have I ever peed in a bed',
'Never have I ever kissed a family member on the mouth',
'Never have I ever shoplifted',
'Never have I ever starved myself for the sake of losing weight',
'Never have I ever masturbated to weird/unusual porn',
'Never have I ever masturbated to facebook photos',
'Never have I ever masturbated over someone playing this game',
'Never have I ever had sex with someone playing this game',
'Never have I ever masturbated using just imagination',
'Never have I ever slept with two people in the same family',
'Never have I ever slept with two people in the same friendship group',
'Never have I ever repurposed a common household item as a sex toy',
'Never have I ever slept with someone on account of their impressive social media following',
'Never have I ever had to delete provocative text threads out of fear that my partner would find them',
'Never have I ever fooled around with a really close friend just to see what it was like',
'Never have I ever performed oral sex on someone without ever kissing them on the mouth',
'Never have I ever called someone the wrong name while hooking up',
'Never have I ever required medical attention because there was a foreign object stuck inside me',
'Never have I ever had sex with someone I was not attracted to because I wanted to get laid that badly',
'Never have I ever snorted cocaine',
'Never have I ever done MDMA',
'Never have I ever smoked weed',
'Never have I ever done ket',
'Never have I ever thrown up from drug intake',
'Never have I ever received a noise complaint immediately after sex',
'Never have I ever had sex within view of unsuspecting onlookers on purpose',
'Never have I ever paid for sex',
'Never have I ever played with a vibrator during sex',
'Never have I ever been unfaithful to a significant other',
'Never have I ever given or received a purely sensual massage',
'Never have I ever performed a striptease for someone',
'Never have I ever had to ask someone whether or not we had sex because I was not sure',
'Never have I ever given or received a lap dance',
'Never have I ever accidentally had sex with a tampon still inside me (or the girl I was with)',
'Never have I ever slept with a friends parent',
'Never have I ever fantasized about my best friends lover',
'Never have I ever sexted with a colleague just for kicks',
'Never have I ever slept with my boss to get ahead, or with a teacher to get a good grade',
'Never have I ever been called a slut or a player and kind of liked it',
'Never have I ever caught an STD',
'Never have I ever passed on an STD',
'Never have I ever had a finger in my ass',
'Never have I ever had a threesome',
'Never have I ever slept with a married person',
'Never have I ever written out a list of the people I have slept with',
'Never have I ever had to lie about my "number" to avoid judgment',
'Never have I ever fingered a woman (or been fingered) during a movie',
'Never have I ever fingered a woman (or been fingered) in the back of a taxi',
'Never have I ever fingered a woman (or been fingered) on an airplane',
'Never have I ever incorporated food into lovemaking',
'Never have I ever masturbated to pornography',
'Never have I ever participated in role play',
'Never have I ever surprised someone butt naked',
'Never have I ever answered a blatant booty call—happily',
'Never have I ever been woken up by multiple booty calls',
'Never have I ever woken up next to a total stranger',
'Never have I ever gotten a happy ending',
'Never have I ever eaten food off of someones naked body',
'Never have I ever fooled around with two different people within twenty-four hours',
'Never have I ever slept with twins',
'Never have I ever had to do the walk of shame',
'Never have I ever been watched having sex',
'Never have I ever fucked a celebrity',
'Never have I ever used a chat-up line on someone',
'Never have I ever been hit on by someone of the same gender',
'Never have I ever farted during sex',
'Never have I ever posted a picture on social media to make another person jealous',
'Never have I ever had sex in a car',
'Never have I ever been to a strip club',
'Never have I ever drank pimms',
'Never have I ever passed out from drinking',
'Never have I ever been kicked out from a club',
'Never have I ever flirted whilst in a relationship',
'Never have I ever been in a relationship for more than a year',
'Never have I ever told someone I am single whilst in a relationship',
'Never have I ever studied marketing',
'Never have I ever studied or worked in finance',
'Never have I ever been a computing nerd',
'Never have I ever worked in retail',
'Never have I ever worked in hospitality',
'Never have I ever had my stomach pumped',
'Never have I ever had an operation',
'Never have I ever had freshers flu',
'Never have I ever had shagged more than three times in one day',
'Never have I ever lived outside the UK for more than a year',
'Never have I ever thrown up on a dance floor',
'Never have I ever thrown up in a taxi',
'Never have I ever been tied up',
'Never have I ever experimented sexually with a member of the same sex',
'Never have I ever said "I love you" just to get laid',
'Never have I ever Googled "sex addiction"',
'Never have I ever been arrested',
'Never have I ever recieved a noise complaint',
'Never have I ever filed a noise complaint',
'Never have I ever had a magic number higher than 2',
'Never have I ever had a magic number higher than 3',
'Never have I ever had a magic number higher than 5',
'Never have I ever had a magic number higher than 10',
'Never have I ever had a magic number higher than 15',
    
'Never have I ever lived in bishop bosel',
'Never have I ever cockblocked someone',
'Never have I ever been cockblocked by someone',
'Never have I ever had a nickname',
'Never have I ever wore fake glasses',
'Never have I ever taken gym selfies',
'Never have I ever had a brummy accent',
'Never have I ever had tinder',
'Never have I ever had tinder whilst with my girlfriend',
'Never have I ever had paid for tinder',
'Never have I ever been on a tinder date'

];*/

function getmyQuestions(count){
    var tmpArrayE = allQuestions.slice(allQuestions);
    var goE = [];

    if (allQuestions.length > 0) {
    var optionsE = Math.floor(Math.random() * allQuestions.length);
    var removedE = allQuestions.splice(optionsE,1);

	document.getElementById("NextNeverBtn").innerHTML = "Next";
    document.getElementById("NeverQuestion").innerHTML = removedE;
    } else {
window.location.href = "EndNever.html"
    }
}


function Play(){
getmyQuestions(1);
}