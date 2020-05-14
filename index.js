var button = document.getElementById('new-task-button');
button.addEventListener('click', function(event){
    var newTask = document.createElement('li');
    var newTaskName = window.prompt('New Task: ');
    newTask.innerText = newTaskName
//    var newTaskNameNode = document.createTextNode(newTaskName);
//    newTask.appendChild(newTaskNameNode);
    document.getElementById('tasks-list').appendChild(newTask);
})

