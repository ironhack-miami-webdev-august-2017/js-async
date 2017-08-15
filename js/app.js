// app.js

// remove h2
var body = document.querySelector('body');
var h2Tag = document.querySelector('h2');
body.removeChild(h2Tag);

var countdownUi = document.querySelector('#countdown-ui');

// add a new heading
// <h2> Start A Countdown </h2>
var newH2 = document.createElement('h2');
newH2.innerHTML = 'Start A Countdown';
countdownUi.appendChild(newH2);


// add an input
// <input type="text" placeholder="Seconds to countdown..." id="countdown-input">
var newInput = document.createElement('input');
newInput.setAttribute('type', 'text');
newInput.setAttribute('placeholder', 'Seconds to countdown...');
newInput.setAttribute('id', 'countdown-input');
countdownUi.appendChild(newInput);


// add a button
// <button id="start-countdown"> Start </button>
var newButton = document.createElement('button');
newButton.setAttribute('id', 'start-countdown');
newButton.innerHTML = 'Start';
countdownUi.appendChild(newButton);


// alert when button is clicked
var startButton = document.querySelector('#start-countdown');

var timerId;

startButton.onclick = function () {

    console.log('#1 Click started');

    // stop the timer if there was already one in progress
    if (timerId) {
      clearInterval(timerId);
    }

    // get amount of seconds from input
    var myInput = document.querySelector('#countdown-input');
    var seconds = Number(myInput.value);

    // make it 10 if they didn't type anything
    if (seconds === 0) {
      seconds = 10;
    }

    // give feedback that the countdown started
    var myH2 = document.querySelector('h2');
    myH2.innerHTML = 'Counting down ' + seconds + ' seconds...';

    // start timer
    timerId = setInterval(function () {
        // Every second decrease the countdown amount by 1
        seconds -= 1;

        // Every second update the feedback
        console.log('#2 callback! ' + seconds + ' seconds');
        myH2.innerHTML = seconds + ' SECONDS';

        // Stop the timer if we have reached the end of the countdown
        if (seconds === 0) {
          clearInterval(timerId);
          timerId = null;
          myH2.innerHTML = 'Countdown DONE!';
        }
    }, 1000);

    console.log('#3 Click ended');

}; // end startButton.onclick
