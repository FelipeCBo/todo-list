import "./styles/style.css";

import {
    createProject,
    getProjects
} from "./logic/projectManager";

import {
    createTodo,
    removeTodo
} from "./logic/todoManager";

import renderProjects from "./ui/renderProjects";
import renderTodos from "./ui/renderTodos";

import {
    saveProjects,
    loadProjects
} from "./storage/storage";

const defaultProject = createProject("Default");

createProject("Estudos");

createTodo(
    defaultProject,
    "Estudar Webpack",
    "Aprender configuração",
    "12/05/2026",
    "high"
);

createTodo(
    defaultProject,
    "Fazer exercícios",
    "Praticar JavaScript",
    "15/05/2026",
    "medium"
);

renderProjects(getProjects());

renderTodos(defaultProject);

saveProjects(getProjects());

console.log(loadProjects());

const form = document.getElementById("todo-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("todo-title").value;

    const description = document.getElementById("todo-description").value;

    const dueDate = document.getElementById("todo-date").value;

    const priority = document.getElementById("todo-priority").value;

    createTodo(
        defaultProject,
        title,
        description,
        dueDate,
        priority
    );

    renderTodos(defaultProject);

    form.reset();

})

const todosContainer = document.getElementById("todos");

todosContainer.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-btn")) {
        const todoId = event.target.dataset.id;

        removeTodo(defaultProject, todoId);

        renderTodos(defaultProject);
    };
});