// Create counter variables
let winCount = 0;
let lossCount = 0;
let userScore = 0;
let targetScore;
let crystalValue;
let red_Crystal;
let blue_Crystal;
let yellow_Crystal;
let green_Crystal; 

//Create variables that hold references to the places in the HTML where we want to display things.

// FUNCTIONS
//==============================================================================
// Set Target Score: randomly generate between 19-120
function getTargetScore(){
    let min = Math.ceil(19);
    let max = Math.floor(120);
    targetScore = Math.floor(Math.random() * (max - min + 1)) + min;
    // return targetScore;
}

// Set Crystal Score: randomly generate between 1-12
function getCrystalValue(){
    let min = Math.ceil(1);
    let max = Math.floor(12);
    crystalValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return crystalValue;
}

// Game Reset
function gameReset(){
    $("#wins").html(winCount);
    $("#losses").html(lossCount);
    userScore = 0;
    $("#userScore").html(userScore);
    getTargetScore();
    $("#randomNum").html(targetScore);
    // Assign random values to each crystal
    red_Crystal = getCrystalValue();
    blue_Crystal = getCrystalValue();
    yellow_Crystal = getCrystalValue();
    green_Crystal = getCrystalValue();
}

// Win & Loss Checker
function winLossChecker(){
    if (userScore === targetScore)
    {
        winCount++;
        gameReset();
    }
    else if (userScore > targetScore){
        lossCount++;
        gameReset();
    }
}

// Crystals Functions 
function red(){
    userScore += red_Crystal;
    $("#userScore").html(userScore);
    winLossChecker();
}
function blue(){
    userScore += blue_Crystal;
    $("#userScore").html(userScore);
    winLossChecker();
}
function yellow(){
    userScore += yellow_Crystal;
    $("#userScore").html(userScore);
    winLossChecker();
}
function green(){
    userScore += green_Crystal;
    $("#userScore").html(userScore);
    winLossChecker();
}


// MAIN PROCESS
//==============================================================================
// makes sure that the JavaScript doesn't get run until the HTML is finished loading
$(document).ready(function(){
    gameReset();
    // console.log(red_Crystal);
    // console.log(blue_Crystal);
    // console.log(yellow_Crystal);
    // console.log(green_Crystal);

    // click effect for each crystals
    $("#redCrystal").on("click", red);
    $("#blueCrystal").on("click", blue);
    $("#yellowCrystal").on("click", yellow);
    $("#greenCrystal").on("click", green);
});