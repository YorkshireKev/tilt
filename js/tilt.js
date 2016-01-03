/*jslint browser: true*/

function deviceMoved(event) {
  //console.log(Math.floor(event.gamma));
  var rotateDeg = Math.floor(event.gamma) * 1.011; //Slight adjustment - works nicely with my Asus Chromebook!
  rotateDeg = 0 - rotateDeg; //Invert number (ie make positive into negative and visa versa). jslint barfs at this - why?
  document.getElementById("frame").style.transform = "rotate(" + rotateDeg + "deg)";
}

//Set up event handler for device movement.
window.addEventListener("deviceorientation", deviceMoved, true);

//Add some handlers for beck, forward and change url
document.getElementById("goUrl").onclick = function () {
  var yyy = document.getElementById("frame"); //Put the iframe ref into a variable or it won't work in firefox!
  if (document.getElementById("newUrl").value.substring(0, 4) !== 'http') {
    yyy.src = "http://" + document.getElementById("newUrl").value;
  } else {
    yyy.src = document.getElementById("newUrl").value;
  }
};