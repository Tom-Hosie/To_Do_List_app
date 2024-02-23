const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Todo cannot be blank");
        return;
    }
    if (todoText.length > 255) {
        alert("Todo cannot exceed 255 characters");
        return;
    }
    if (todos.includes(todoText)) {
        alert("Todo already exists");
        return;
    }
    todos.push(todoText);
    makeTodoList();
    todoInput.value = "";
});


function makeTodoList() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
      // Add delete button to each todo item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "X";
        deleteButton.classList.add('ml-2', 'text-red-600', 'cursor-pointer');
        deleteButton.addEventListener('click', () => {
            todos.splice(index, 1);
            makeTodoList();
        });
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}
