/*jslint browser: true*/

function deviceMoved(event) {
  //console.log(Math.floor(event.gamma));
  var rotateDeg = Math.floor(event.gamma) * 1.011; //Slight adjustment - works nicely with my Asus Chromebook!
  rotateDeg = 0 - rotateDeg; //Invert number (ie make positive into negative and visa versa). jslint barfs at this - why?
  document.getElementById("frame").style.transform = "rotate(" + rotateDeg + "deg)";
}

//Set up event handler for  device movement.
window.addEventListener("deviceorientation", deviceMoved, true);