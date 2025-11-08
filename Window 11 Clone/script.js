const task_bar = document.querySelector(".task_bar");
const start_menu = document.querySelector(".start_menu");
const side_menu = document.querySelector(".side_menu");
const left_task = document.querySelector(".task_left");

task_bar.addEventListener("click", ()=> {
    console.log("clicked")
    if(start_menu.style.top == "16%"){
        start_menu.style.top = "100%";
    }
    else {
        start_menu.style.top = "16%";
    }
});

// left_task.addEventListener("mouseover", () => {
//     console.log("Mouse enter")
//     if(side_menu.style.left == "1%"){
//         side_menu.style.left = "-45%";
//     }
//     else {
//         side_menu.style.left = "1%";
//     }
// })

left_task.addEventListener("mouseenter", () => {
        side_menu.style.left = "1%";
});

left_task.addEventListener("mouseleave", () => {
        side_menu.style.left = "-45%";
});