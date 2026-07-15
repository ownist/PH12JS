// parent child relation
// const parent = document.querySelector("#items");
// const children = parent.children;

// console.log(children);

// const grandParent = document.querySelector(".todo-list");
// const parent = grandParent.children;
// console.log(parent[1].children);

// const grandParent = document.querySelector(".todo-list");
// const children = grandParent.querySelectorAll(".item");

// console.log(children);

// child to parent
// const children = document.querySelector(".item");
// const parent = children.parentElement;

// console.log(parent);

// direct child to grandparent
// const children = document.querySelector(".item");
// const grandParent = children.closest(".todo-list");

// console.log(grandParent);

// next sibling
// const childrenOne = document.querySelector(".item");
// const childrenTwo = childrenOne.nextElementSibling;
// childrenTwo.style.color = "#2dba4e";

// console.log(childrenTwo);

// previous element sibling
const childrenTwo = document.querySelector(".item").nextElementSibling;
const childrenOne = childrenTwo.previousElementSibling;

childrenOne.style.color = "red";
