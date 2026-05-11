import "./styles/style.css";

import {
    createProject,
    getProjects
} from "./logic/projectManager";

import {
    createTodo
} from "./logic/todoManager";

import renderProjects from "./ui/renderProjects";
import renderTodos from "./ui/renderTodos";

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