

const newTask = document.querySelector('#new-task')
const form = document.querySelector('form')
const todoUI = document.querySelector('#items')
const completeUI = document.querySelector('.complete-list ul')


// createTask 

const createTask = (task) => {

    const listItem = document.createElement('li')
    const checkBox = document.createElement('input')
    const label = document.createElement('lebel')

    label.innerText = task;
    checkBox.type = 'checkbox';


    listItem.appendChild(checkBox)
    listItem.appendChild(label)

    return listItem

}


const addTask = function (event) {
    event.preventDefault();

    let listItem = createTask(newTask.value)
    todoUI.appendChild(listItem);

    newTask.value = " "

    //bindTask in complete task    
    bindInCompleteItems(listItem, completeTask)

}

let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUI.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

const bindInCompleteItems = function (taskItem, checkboxclick) {

    const checkbox = taskItem.querySelector('input[type ="checkbox"]')

    checkbox.onchange = checkboxclick
}


const bindCompleteItems = function (taskItem, deleteBtnClick) {

    const deleteBtn = taskItem.querySelector('.delete')

    deleteBtn.onclick = deleteBtnClick
}




form.addEventListener('submit', addTask);