// get element by id
// console.log(document.getElementById("addTask"));

// change element content
let headerElement = document.getElementById("header"); // using textContent
headerElement.textContent = "todo apps";

/**
 * innextext and textcontent er moddhe diff:
 *
 * (innerText): browser er final output ta read kore then exactly seitai return kore
 * (textContent): ei jinista amr html code ta read kore not browser er output, amr code e jeivabe dewa ache thik seivabe read kore amake output dei
 *
 * for example:
 */
console.log(headerElement.textContent); // html code read kore: todo apps
console.log(headerElement.innerText); // browser er final output ta read kore: TODO APPS

// jodi pura html pete chai taile eida use kora lagbo
console.log(headerElement.innerHTML);

console.log("\n");

// headerElement hocche ekta html element: which is a object
console.dir(headerElement);

console.log("\n");

// element ke style korbo
headerElement.style.borderBottom = "2px solid #2dba4e";

console.log("\n");

// using get elements by classname
// let items = document.getElementsByClassName("item");

// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontSize = "30px";
// }

/**
 * document er moddhe bivinno method: getelement by id, class name etc sudhu matro document er opor appicable na.. eigulo jekono html tag / elements er oporew appliacble
 */
let itemUL = document.getElementById("items");
let items = itemUL.getElementsByClassName("item");

for (let i = 0; i < items.length; i++) {
  items[i].style.color = "green";
  items[i].style.fontWeight = "bold";
}

console.log("\n");

// using get elements by tagname
let allLiTags = document.getElementsByTagName("li");
console.log(allLiTags);

console.log("\n");

// using query selector
let findHeader = document.querySelector(".header");
console.log(findHeader);

console.log("\n");

let lastItem = document.querySelector(".item:last-child");
console.log(lastItem);
lastItem.style.color = "red";

console.log("\n");

let lastItems = document.querySelectorAll(".item:last-child");
// lastItems.style.color = "blue";

console.log(lastItems);

for (let i = 0; i < lastItems.length; i++) {
  // console.log(lastItems[i]);
  lastItems[i].style.fontSize = "25px";
}
