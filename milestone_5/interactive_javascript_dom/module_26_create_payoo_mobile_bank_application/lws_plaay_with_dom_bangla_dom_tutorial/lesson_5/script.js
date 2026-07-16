// create an element
const divElement = document.createElement("div");
console.dir(divElement);

divElement.className = "red";
divElement.setAttribute("id", "redDiv");
divElement.setAttribute("title", "yeah! this is red attribute");

const container = document.querySelector(".todo-list");
// const h2Element = container.querySelector("h2");
// container.insertBefore(divElement, h2Element);

const a = container.appendChild(divElement);
const b = container.append(divElement);

console.log(a);
console.log(b);
