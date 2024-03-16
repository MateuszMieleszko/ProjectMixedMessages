//generates random number based on the array's length
function randomNumberGenerator(arr){
    return Math.floor(Math.random() * arr.length);
}

//months saved in an array
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Prophecies saved in arrays
const goodProphecy = ['the conflict on Ukraine will end',
'conflict between Israel and Palestine will end', 
'North Korea will become a democratic country',
'the cancer vaccine will be discovered and everyone will be treated',
'scientists will discover a method of cloning food, which will stop world hunger',
'people start traveling and living on Mars'];

//Bad prophecies saved in arrays
const badProphecy = ['the Third World War will begin and 90% of countries on the world will be involved in this',
"a new virus will arise that will kill 90% of the world's population within a few days and there will be no vaccine for it",
'aliens will attack planet earth',
'a mega volcano will erupt, destroying most of Europe, and the rest of the world will face a huge amount of volcanic ash',
"the world's climate will change drastically, killing people with extreme temperatures",
'hackers will attack and electricity around the world will disappear for at least a year',
'the earth will collide with a huge asteroid that will destroy our planet'];
//generates fortunes with a three variables and a template literal and logs to the console
function Prophet(){
    let month = months[randomNumberGenerator(months)]; 
    let goodProph = goodProphecy[randomNumberGenerator(goodProphecy)];
    let badProph = badProphecy[randomNumberGenerator(badProphecy)];

    //choosing randomly between good and bad prophecy
    let chooserandom= Math.floor(Math.random()*2);
    if (chooserandom===0){
        console.log(`This year in ${month} ${goodProph}.`);
    }else{
        console.log(`This year in ${month} ${badProph}. It's not certain, but we have to prepare for it.`);
    }
}

Prophet();