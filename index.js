"use strict";

const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.onclick = () => {
  let btnVal = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const spanEl = document.createElement("span");
  const newBtn = document.createElement("button");

  listItem.appendChild(spanEl);
  spanEl.textContent = btnVal;
  listItem.appendChild(newBtn);
  newBtn.textContent = "Delete";
  list.appendChild(listItem);

  newBtn.onclick = (e) => {
    list.removeChild(listItem);
  };

  input.focus();
};
