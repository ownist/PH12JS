// 2. copy to clipboard
const copyToClipBoard = (str) => {
  let element = document.createElement("textarea");
  element.value = str;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
};

const handleClick = () => {
  let text = document.querySelector("#text");
  copyToClipBoard(text.innerText);
};
