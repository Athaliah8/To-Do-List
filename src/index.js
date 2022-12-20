const ul = document.getElementById('list');
let li;
const addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

function addItem() {
  const input = document.getElementById('input');
  const item = input.value;
  const textNode = document.createTextNode(item);
  if (item === '') {
    msg = 'Enter your Task';
    alert(msg);
    return false;
  }
  li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id', 'check');

  const label = document.createElement('label');

  ul.appendChild(label);
  li.appendChild(checkbox);
  label.appendChild(textNode);
  li.appendChild(label);
  ul.insertBefore(li, ul.childNodes[0]);
  setTimeout(() => {
    li.className = 'visual';
  }, 5);
  input.value = ' ';

  const removeButton = document.getElementById('remove');
  removeButton.addEventListener('click', removeItem);

  function removeItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
      const element = li[index];
      while (li[index] && li[index].children[0].checked) {
        ul.removeChild(li[index]);
      }
    }
  }
}