// event listenars
// const headerElement = document.querySelector("#header");

// headerElement.addEventListener("mouseleave", (event) => {
//   console.log(event);
// });

// const inputElement = document.querySelector("input[type='text']");

// inputElement.addEventListener("input", (event) => {
//   console.log(event);
// });

const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target);
});
