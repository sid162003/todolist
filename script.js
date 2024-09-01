let tasks = [];
let currentEditIndex = null;

document.getElementById('add-btn').addEventListener('click', function() {
    const taskText = document.getElementById('todo-input').value;

    if (taskText.trim()) {
        tasks.push(taskText);
        renderTasks();
        document.getElementById('todo-input').value = '';
    }
});

function renderTasks() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', function() {
            openEditModal(index);
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove');
        removeBtn.addEventListener('click', function() {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(editBtn);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}

function openEditModal(index) {
    currentEditIndex = index;
    document.getElementById('edit-input').value = tasks[index];
    document.getElementById('edit-modal').style.display = 'flex';
}

document.getElementById('save-btn').addEventListener('click', function() {
    const editedText = document.getElementById('edit-input').value;

    if (editedText.trim()) {
        tasks[currentEditIndex] = editedText;
        renderTasks();
        closeEditModal();
    }
});

document.querySelector('.close').addEventListener('click', closeEditModal);

function closeEditModal() {
    document.getElementById('edit-modal').style.display = 'none';
}
