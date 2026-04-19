const title = document.getElementById("title");
title.innerText = "only ownist";

// getElementsByClassName
const foreignKhabars = document.getElementsByClassName("foreign");
console.log(foreignKhabars);

for (const e of foreignKhabars) {
  console.log(e);
}

console.log("\n");

/**
 * practice
 */

// getElementsByTagname
const liTags = document.getElementsByTagName("li");
console.log(liTags);
for (const li of liTags) {
  console.log(li);
  console.log(li.innerText);
}

console.log("\n");

// getElemetsById
const para = document.getElementById("para");
console.log(para);
console.log(para.innerText);

console.log("\n");

// getElementsByClassName
const navItems = document.getElementsByClassName("nav_item");
console.log(navItems);

for (const li of navItems) {
  console.log(li);
}
