// listeners
document.getElementById('play-btn').addEventListener('click', randomizePlayer);
document.getElementById('play-btn').addEventListener('click', randomizeHouse);
document.getElementById('play-btn').addEventListener('click', determine);
document.getElementById('purchase-btn').addEventListener('click', purchase);

// variables
let player = 0;
let player_win_count = 0;
let house_win_count = 0;
let tie_count = 0;
let house = 0;
let finalTotal;
let funds = Number(document.getElementById('funds').innerHTML);
let socks = 0;
let ring = 0;
let bike = 0;
let trip = 0;
let house_item = 0;
let motorcycle = 0;
let car = 0;
let boat = 0;
// functions

// randomizes the die of the player
function randomizePlayer(){
    // randomizes a number from 0 to 5
    randNum = Math.floor(Math.random() * 6);
    // roll a one
    if (randNum == 0){
        document.getElementById('player-die').src = "images/1.png";
        player = 1;
    }
    // roll a two
    if (randNum == 1){
        document.getElementById('player-die').src = "images/2.png";
        player = 2;
    }
    // roll a three
    if (randNum == 2){
        document.getElementById('player-die').src = "images/3.png";
        player = 3;
    }
    // roll a four
    if (randNum == 3){
        document.getElementById('player-die').src = "images/4.png";
        player = 4;
    }
    // roll a five
    if (randNum == 4){
        document.getElementById('player-die').src = "images/5.png";
        player = 5;
    }
    // roll a six
    if (randNum == 5){
        document.getElementById('player-die').src = "images/6.png";
        player = 6;
    }
}

// randomizes the die of the house
function randomizeHouse(){
    // randomizes a number from 0 to 5
    randNum = Math.floor(Math.random() * 6);
    // roll a one
    if (randNum == 0){
        document.getElementById('house-die').src = "images/1.png";
        house = 1;
    }
    // roll a two
    if (randNum == 1){
        document.getElementById('house-die').src = "images/2.png";
        house = 2;
    }
    // roll a three
    if (randNum == 2){
        document.getElementById('house-die').src = "images/3.png";
        house = 3;
    }
    // roll a four
    if (randNum == 3){
        document.getElementById('house-die').src = "images/4.png";
        house = 4;
    }
    // roll a five
    if (randNum == 4){
        document.getElementById('house-die').src = "images/5.png";
        house = 5;
    }
    // roll a six
    if (randNum == 5){
        document.getElementById('house-die').src = "images/6.png";
        house = 6;
    }
}

// determines whether you won or lost
function determine(){
    // determines if you are in the negatives
    let bet = Number(document.getElementById('bet-input').value);
    // if you won
    console.log(funds);
    console.log(bet);
    if (player > house){
        finalTotal = funds += bet;
        console.log("player");
        document.getElementById('funds').innerHTML = finalTotal;
        player_win_count += 1;
        document.getElementById('player-win').innerHTML = player_win_count;
        

    }
    // if you lost 
    if (house > player){
        finalTotal = funds -= bet;
        console.log("house");
        document.getElementById('funds').innerHTML = finalTotal;
        house_win_count += 1;
        document.getElementById('house-win').innerHTML = player_win_count;
    }
    // if it was a tie
    if (player == house){
        console.log("Tie");
        tie_count += 1;
        document.getElementById('tie-win').innerHTML = tie_count;
    }
}

// purchases luxury items
function purchase(){
    let item = "";
    // if you have less than or equal to $1000
    if (funds <= 1000){
        document.getElementById('loot').innerHTML = 'images/socks.png';
        item = "socks";
        document.getElementById('funds').innerHTML = finalTotal;
        document.getElementById('socks').innerHTML = socks += 1;
    }
    // if you have more than $1000 and less than $5000
    else if(funds > 1000 && funds < 5000){
        // sets a random number;
        itemChoice = Math.random();
        // get a ring
        if (itemChoice <=0.33){
            document.getElementById('loot').innerHTML = 'images/ring.png';
            finalTotal = funds -= 1000;
            item = "ring";
            document.getElementById('funds').innerHTML = finalTotal;
            document.getElementById('ring').innerHTML = ring += 1;
        }
        // get a bike
        if (itemChoice > 0.33 && itemChoice <= 0.66){
            document.getElementById('loot').innerHTML = 'images/socks.png';
            finalTotal = funds -= 1000;
            item = "bike";
            document.getElementById('funds').innerHTML = finalTotal;
            document.getElementById('bike').innerHTML =  bike += 1;
        }
        // get a trip
        if (itemChoice > 0.66 && itemChoice <= 1.00){
            document.getElementById('loot').innerHTML = 'images/trip.png';
            finalTotal = funds -= 1000;
            item = "trip";
            document.getElementById('funds').innerHTML = finalTotal;
            document.getElementById('trip').innerHTML = trip += 1;
        }
    }
    // if you have more than or equal to $5000
    else if(funds >= 5000){
        // sets a random number
        itemChoice = Math.random();
        // get a house
        if (itemChoice <= 0.25){
            document.getElementById('loot').innerHTML = 'images/house.png';
            finalTotal = funds -= 5000;
            item = "house";
            document.getElementById('funds').innerHTML = finalTotal;
            document.getElementById('house').innerHTML = house_item += 1;
        }
        // get a motorcycle
        if (itemChoice > 0.25 && itemChoice < 0.50){
            document.getElementById('loot').innerHTML = 'images/motorcycle.png';
            finalTotal = funds -= 5000;
            item = "motorcycle";
            document.getElementById('funds').innerHTML = finalTotal;
            document.getElementById('motorcycle').innerHTML =  motorcycle += 1;
        }
        // get a car
        if (itemChoice > 0.50 && itemChoice < 0.75){
            document.getElementById('loot').innerHTML = 'images/car.png';
            finalTotal = funds -= 5000;
            item = "car";
            document.getElementById('funds').innerHTML = finalTotal;
            document.getElementById('car').innerHTML = car += 1;
        }
        // get a boat
        if (itemChoice > 0.75 && itemChoice < 1.00){
            document.getElementById('loot').innerHTML = 'images/boat.png';
            finalTotal = funds -= 5000;
            item = "boat";
            document.getElementById('funds').innerHTML = finalTotal;
            document.getElementById('boat').innerHTML = boat += 1;
        }   
    }
    document.getElementById('loot').innerHTML = '<img src="images/' + item + '.png">'
}