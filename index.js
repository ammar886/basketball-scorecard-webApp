//init homeScore and get home Score html element
let homeScore = 0;
let homeScoreEl = document.getElementById("hScore");
//init guestScore and get guest Score html element
let guestScore = 0;
let guestScoreEl = document.getElementById("gScore");

//homeScore buttons

function plusOneHome(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function plusTwoHome(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function plusThreeHome(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function onResetClick(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}
//guestScore buttons
function plusOneGuest(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}
function plusTwoGuest(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}
function plusThreeGuest(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}




