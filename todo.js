const form = document.querySelector(".todoForm");
const input = document.querySelector(".todoInput");
const div = document.querySelector('.todoList');
const ul = document.querySelector('.todos');

const darkmodeButton = document.querySelector('.darkmodeButton');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  li.setAttribute('class','item');
  li.innerText = input.value;

  const button = document.createElement('button');
  button.setAttribute('class','delBtn');
  button.innerText = 'del';

  const divider = document.createElement('div');
  divider.setAttribute('class','divider');

  li.appendChild(button);
  ul.appendChild(li);
  ul.appendChild(divider);
  div.appendChild(ul);

  input.value = '';
  input.focus();

  button.addEventListener('click',()=>{
    ul.removeChild(li);
    ul.removeChild(divider);
  });
});

darkmodeButton.addEventListener('click',()=>{
  const body = document.querySelector('body');
  body.style.backgroundColor = 'black';
})


