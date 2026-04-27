/*
console.log("js file connected");

console.log("\n");

const items = document.getElementsByClassName("item");
for (const i of items) {
  i.addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
  });
}
*/

const parent = document.getElementById("mainConatiner");

document
  .getElementById("mainConatiner")
  .addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
  });

document.getElementById("addNewItemBtn").addEventListener("click", function () {
  const li = document.createElement("li");
  li.classList.add("item");
  li.innerText = "New Item";

  parent.appendChild(li);
});
