console.log("js file connected");

// make green
function makeGreen() {
  document.body.style.background = "#2dba4e";
}

// make yellow
function makeYellow() {
  document.body.style.background = "yellow";
  document.body.style.color = "black";
}

function reset() {
  document.body.style.background = "white";
  document.body.style.color = "black";
}

// diff method
const makeRed = document.getElementById("makeRed");

makeRed.onclick = function makeRed() {
  document.body.style.background = "red";
  document.body.style.color = "white";
};
