const form = document.querySelector(".todoForm");
const input = document.querySelector(".todoInput");
const div = document.querySelector(".todoList");
const ul = document.querySelector(".todos");

const darkmodeButton = document.querySelector(".darkmodeButton");
let active = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  li.setAttribute("class", "item");

  const value = input.value;
  if (value.trim().length === 0) {
    return;
  }

  li.innerText = input.value;

  const button = document.createElement("button");
  button.setAttribute("class", "delBtn");
  button.innerText = "del";

  const divider = document.createElement("div");
  divider.setAttribute("class", "divider");

  li.appendChild(button);
  ul.appendChild(li);
  ul.appendChild(divider);
  div.appendChild(ul);

  input.value = "";
  input.focus();

  button.addEventListener("click", () => {
    ul.removeChild(li);
    ul.removeChild(divider);
  });

  li.addEventListener("click", (e) => {
    active = !active;

    if (active) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    } else {
      li.style.textDecoration = null;
      li.style.color = null;
    }
  });
});

darkmodeButton.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "black";
});
