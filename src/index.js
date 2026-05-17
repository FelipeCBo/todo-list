import "./styles/style.css";

import {
    createProject,
    getProjects,
    setProjects
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

let projects = loadProjects();

if (projects.length === 0) {

    const defaultProject =
        createProject("Default");

    createTodo(
        defaultProject,
        "First Todo",
        "My first task",
        "2026-05-17",
        "high"
    );

} else {

    setProjects(projects);

}

projects = getProjects();

let currentProject = projects[0];

function handleProjectClick(project) {

    currentProject = project;

    renderProjects(
        projects,
        currentProject,
        handleProjectClick
    );

    renderTodos(currentProject);
}

renderProjects(
    projects,
    currentProject,
    handleProjectClick
);

renderTodos(currentProject);

saveProjects(projects);

const form =
    document.getElementById("todo-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const title =
        document.getElementById(
            "todo-title"
        ).value;

    const description =
        document.getElementById(
            "todo-description"
        ).value;

    const dueDate =
        document.getElementById(
            "todo-date"
        ).value;

    const priority =
        document.getElementById(
            "todo-priority"
        ).value;

    createTodo(
        currentProject,
        title,
        description,
        dueDate,
        priority
    );

    renderTodos(currentProject);

    saveProjects(projects);

    form.reset();
});

const todosContainer =
    document.getElementById("todos");

todosContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")
        ) {
            const todoId =
                event.target.dataset.id;

            removeTodo(
                currentProject,
                todoId
            );

            renderTodos(currentProject);

            saveProjects(projects);
        }

        if (event.target.classList.contains("complete-btn")
        ) {

            const todoId =
                event.target.dataset.id;

            const todo =
                currentProject.todos.find(
                    todo => todo.id === todoId
                );

            todo.toggleComplete();

            renderTodos(currentProject);

            saveProjects(projects);
        }
    }
);

const projectForm =
    document.getElementById("project-form");

projectForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const projectName =
            document.getElementById(
                "project-name"
            ).value;

        const newProject =
            createProject(projectName);

        currentProject = newProject;

        renderProjects(
            projects,
            currentProject,
            handleProjectClick
        );

        renderTodos(currentProject);

        saveProjects(projects);

        projectForm.reset();
    }
);