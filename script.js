let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function addTaskToDOM (task) {
	const li = document.createElement('li');

	li.innerHTML=`
		<input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''} class="custom-checkbox">
        <label for="${task.id}">${task.text}</label>
        <img src="bin.svg" class="delete" data-id="${task.id}" />
	`
	taskList.append(li);
}

function renderList () {
	taskList.innerHTML = '';

	for(var i=0;i<tasks.length;i++){
		addTaskToDOM(tasks[i]);
	}

	tasksCounter.innerHTML = tasks.length;
}

function toggleTask(taskId) {
	const task=tasks.filter(function (task){
		return task.id === taskId;
	})
	if(task.length > 0){
		const currentTask=task[0];
		currentTask.done=!currentTask.done;
		renderList();
		showNotification('Task Toggled Successfully');
		return;
	}
	showNotification('Could not toggle the Task');
}

function deleteTask (taskId) {
	const newTasks=tasks.filter(function (task){
		return task.id !== taskId;
	})

	tasks=newTasks;
	renderList();
	showNotification('Task Deleted Successfully');
}

function addTask (task) {
	if(task){
		tasks.push(task);
		renderList();
		showNotification('Task Added Successfully');
		return;
	}
	showNotification('Task can not be added');
}

function showNotification(text) {
	alert(text);
}

function handleInputKeypress(e){
	if(e.key == 'Enter'){
		const text=e.target.value;

		if(!text){
			showNotification('Task Cannot be Empty');
			return;
		}

		const task= {
			text, //text: text
			id: Date.now().toString(),
			done: false
		}

		e.target.value='';
		addTask(task);
	}
}

addTaskInput.addEventListener('keyup',handleInputKeypress);