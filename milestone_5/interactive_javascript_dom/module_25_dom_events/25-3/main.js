console.log("js file connected");

const makeYellow = document.getElementById("makeYellow");

makeYellow.addEventListener("click", function (event) {
  document.body.style.background = "yellow";

  // even somporkito data
  console.log(event.target); // kon element ta seita dibe
  console.log(event.type); // kon type event seita
});
