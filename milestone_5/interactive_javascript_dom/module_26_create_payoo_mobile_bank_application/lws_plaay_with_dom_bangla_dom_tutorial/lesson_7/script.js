/**
 * =================
 * select elements and assign them into variable
 * ================
 */
const newTask = document.querySelector("#new-task");
const form = document.querySelector("form");
const todoUl = document.querySelector("#items");
const completeUl = document.querySelector(".complete-list ul");

/**
 * =================
 * functions
 * =================
 */
const createTask = function (task) {
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");

  // set text
  label.innerText = task;
  checkBox.type = "checkbox";

  // append in parent / container
  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  // return listItem
  return listItem;
};

const addTask = function (event) {
  event.preventDefault();
  const listItem = createTask(newTask.value);

  // append into incomplete task section
  todoUl.appendChild(listItem);

  // blank input element value
  newTask.value = "";

  // bind the new list item to the incomplete list
  bindIncompleteItems(listItem, completeTask);
};

const completeTask = function () {
  const listItem = this.parentNode;

  // create delete btn
  const deleteBtn = document.createElement("button");

  // set btn text
  deleteBtn.innerText = "Delete";

  // set class into deleteBtn
  deleteBtn.className = "delete";

  // append into listItem
  listItem.appendChild(deleteBtn);

  // select checkbox
  const checkBox = listItem.querySelector('input[type="checkbox"]');

  // remove checkbox
  checkBox.remove();

  // apend listitem into complete task section
  completeUl.appendChild(listItem);

  // bind complete items
  bindComlpeteItems(listItem, deleteTask);
};

const deleteTask = function () {
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);
};

const bindIncompleteItems = function (taskItem, checkboxClick) {
  const checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

const bindComlpeteItems = function (taskItem, deleteBtnClick) {
  const deleteBtn = taskItem.querySelector(".delete");
  deleteBtn.onclick = deleteBtnClick;
};

for (let i = 0; i < todoUl.children.length; i++) {
  bindIncompleteItems(todoUl.children[i], completeTask);
}
for (let i = 0; i < completeUl.children.length; i++) {
  bindComlpeteItems(completeUl.children[i], deleteTask);
}

// call all functions
form.addEventListener("submit", addTask);
