const add_btn = document.querySelector(".add_btn");
const input_box = document.querySelector("#input_box");
const list_container = document.querySelector(".list_container ul");
const warning_message = document.querySelector(".warning_message");

let todos = []; 

// Handling input field 
input_box.addEventListener("input", () => {
  if (input_box.value.trim().length === 0) {
    input_box.style.backgroundColor = "white";
    warning_message.style.visibility = "hidden";
    input_box.style.color = "rgb(95, 95, 95)";
    input_box.style.border = "1px solid rgb(168, 168, 168)";
  } else if (input_box.value.trim().length <= 3) {
    warning_message.style.visibility = "visible";
    input_box.style.border = "1px solid red";
    input_box.style.color = "rgb(114, 0, 0)";
    input_box.style.backgroundColor = "rgb(253, 198, 198)";
  } else {
    warning_message.style.visibility = "hidden";
    input_box.style.color = "rgb(0, 123, 171)";
    input_box.style.backgroundColor = "rgb(211, 239, 250)";
    input_box.style.border = "1px solid rgb(2, 126, 175)";
  }
});


function addTodo() {
  const todoText = input_box.value.trim();
  if (todoText === "") {
    warning_message.style.visibility = "visible";
    input_box.style.border = "1px solid red";
    return;
  }

  // Add to array
  todos.push(todoText);
  saveData(); 
  renderTodos(); 

  input_box.value = "";
  input_box.style.backgroundColor = "white";
  input_box.style.color = "rgb(95, 95, 95)";
  input_box.style.border = "1px solid rgb(168, 168, 168)";
}


function renderTodos() {
  list_container.innerHTML = ""; 

  todos.forEach((todoText, index) => {
    const li = document.createElement("li");
    li.textContent = todoText;

    const crossIcon = document.createElement("span");
    crossIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(crossIcon);
    list_container.appendChild(li);

    // Delete event
    crossIcon.addEventListener("click", () => {
      todos.splice(index, 1); 
      saveData(); 
      renderTodos(); 
    });
  });
}


function saveData() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


function showTask() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
  }
  renderTodos();
}

add_btn.addEventListener("click", addTodo);
input_box.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});


showTask();
