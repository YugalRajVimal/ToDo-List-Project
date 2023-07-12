const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {
	for(var i=0;i<tasks.length;i++){
		console.log(tasks[i].id,tasks[i].text,'is',tasks[i].done);
	}
}

function markTaskAsComplete (taskId) {}

function deleteTask (taskId) {}

function addTask (task) {
	tasks[tasks.length]=task;
	renderList();
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