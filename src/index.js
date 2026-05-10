import "./styles/style.css";

import {
    createProject,
    getProjects
} from "./logic/projectManager";

import renderProjects from "./ui/renderProjects";

createProject("Default");
createProject("Estudos");

const projects = getProjects();

console.log(projects);

renderProjects(projects);