var button = document.getElementById('new-task-button');
button.addEventListener('click', function(event){
    var form = document.getElementById('form');
    event.target.classList.toggle('hidden');
    form.classList.toggle('hidden');
    document.getElementById('input').focus();
});
var form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    var newTaskName = document.getElementById('input').value;
    var newTask = document.createElement('li');
    newTask.innerText = newTaskName;
    document.getElementById('tasks-list').appendChild(newTask);
    form.reset();
    form.classList.toggle('hidden');
    button.classList.toggle('hidden');
    button.focus();
});