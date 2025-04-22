// Exercise 12: Write the JS to target the .stop-button class on click. Toggle the stop-animations class on and off

function myPlayFunction() {
    document.getElementById("animate-me").style.animationPlayState = "running";
  }
  
  function myPauseFunction() {
    document.getElementById("animate-me").style.animationPlayState = "paused";
  }