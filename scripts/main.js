let task = document.getElementById('task-input');
let addBtn = document.getElementById('btn');
let list = document.getElementById('task-list');

function addTask() {
    let taskName = task.value;

    let item = document.createElement('li');
    item.textContent = taskName;
    item.setAttribute('id', taskName);
    list.appendChild(item);

    let removeButton = document.createElement('button');
    removeButton.setAttribute('id', taskName);
    removeButton.addEventListener('click', removeTask);
    removeButton.textContent = 'X';
    item.appendChild(removeButton);
}

function removeTask(e) {
    e.target.parentNode.remove();
}

addBtn.addEventListener('click', addTask);