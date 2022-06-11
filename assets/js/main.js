let todos = [
  {
    id: 0.7842433898426,
    title: "Сходить к врачу",
    desc: "Сходить к терапевту 25 марта в 8:00 am. Не забыть взять справку о болезни",
    status: "Active"
  },
  {
    id: 0.8233640134317539,
    title: "Купить носки",
    desc: "",
    status: "Active"
  },
  {
    id: 0.07553504752658746,
    title: "Покрасить стены",
    desc: "Взять старую краску и довести стены до идеала",
    status: "Done"
  },
]

// add todo

const btnCreateTodo = document.querySelector(".add-todo")

function addTodo(title, desc) {
  todos.push({
    "id": Math.random(),
    "title": title,
    "desc": desc,
    "status": "Active"
  })

  render()
}

function createTodoOnClick() {
  const titleCreateTodo = document.getElementById("titleTodo");
  const descCreateTodo = document.getElementById("descTodo");

  if (titleCreateTodo.value != '') {
    addTodo(titleCreateTodo.value, descCreateTodo.value)
  }
  
}

btnCreateTodo.addEventListener("click", () => {
  createTodoOnClick()
})




// delete Todo


addEventListener("click", (elem) => {

  if (elem.target.classList[1] == "btn--delete"){
    deleteTodo(Number(elem.target.dataset.id))
  }

})


function deleteTodo(todoId) {
  todos = todos.filter((todo) => {
    return todo.id !== todoId
  })

  render()
}




// Done Todo

addEventListener("click", (elem) => {

  if (elem.target.classList[1] == "btn--done") {
    doneTodo(Number(elem.target.dataset.id))
  }

})

function doneTodo(todoId) {

  todos.forEach(todo => {
    if (todo.id == todoId) {
      todo.status = "Done";
    }
  });

  render()
}





// ui

const todoList = document.querySelector(".js-list-todo")

function render(params) {
  let htmlActive = '';
  let htmlDone = '';

  let html = '';

  todos.forEach(todo => {
    if (todo.status == "Active"){
      htmlActive += `
      <li class="todo todo--active">
      <span>${todo.title}</span>
      <span>${todo.desc}</span>
      <div class="todo-btns">
        <button class="todo-btn btn--done" data-id=${todo.id}>Выполнено</button>
        <button class="todo-btn btn--delete" data-id=${todo.id}>Удалить</button>
      </div>
      </li>
      `
    }

    if (todo.status == "Done") {
    htmlDone += `
      <li class="todo todo--done">
      <span>${todo.title}</span>
      <span>${todo.desc}</span>
      <div class="todo-btns">
        <button class="todo-btn btn--done" data-id=${todo.id} disabled>Выполнено</button>
        <button class="todo-btn btn--delete" data-id=${todo.id}>Удалить</button>
      </div>
      </li>
      `
    }
  });

  html = htmlActive + htmlDone;

  todoList.innerHTML = html;
}








render()

// titleTodo
// descTodo
// add - todo
// todo - btn