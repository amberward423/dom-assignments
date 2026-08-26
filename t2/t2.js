// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
console.log(todoList,'todoList');

const ul = document.querySelector('ul');

for (let todo of todoList) {

let li = document.createElement('li');
let input = document.createElement('input');

console.log(todo);

input.setAttribute('type','checkbox');

input.setAttribute('id', `todo${todo.id}`);

  if (todo.completed){
//input.completed = 'checked'
    input.setAttribute('checked', true);
}

//label.htmlFor = input.id; 

let label = document.createElement('label');

label.htmlFor =`todo${todo.id}`;

label.innerHTML = `task${todo.task}`;



li.appendChild(input);
li.appendChild(label);
ul.appendChild(li);

}

