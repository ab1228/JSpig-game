/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores, roundScore, activePlayer, gamePlaying;

init();

var lastRoll;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // random number
        //Random Number between 1 and 6
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        // var count = 0;
        // var lastRoll = 0;
        //display result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        // update scor{e only IF not a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            // same ass roundScore = roundScore + dice;

            roundScore += dice1 + dice2;
            console.log(roundScore);
            console.log(dice2);
            console.log(dice1);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;


        }

        else {
            nextPlayer();

        }

        // // update score only IF not a 1
        // if (dice === 6 && lastRoll === 6) {
        //     //player looses score 
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = 0;
        //     nextPlayer();
        // }
        // else if (dice !== 1) {
        //     //add score
        //     // same ass roundScore = roundScore + dice;
        //     console.log(dice);
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;


        // }

        // else {
        //     nextPlayer();

        // }
        // lastRoll = dice;

    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add CURRENT score to GLOBAL score
        // scores[activePlayer] = scores[activePlayer] + roundScore;
        scores[activePlayer] += roundScore;


        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, null or "" are COERCED to false
        // anything else is CORCED to true
        if (input) {
            var winningScore = input;
        } else {
            winningScore = 100;
        }


        // check if player won the game
        if (scores[activePlayer] >= winningScore) {
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
            // Next player
            nextPlayer();
        }
    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // if (activePlayer === 0) {
    //     activePlayer = 1;
    // } else activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');


    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}


/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/