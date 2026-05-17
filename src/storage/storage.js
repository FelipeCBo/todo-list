import Project from "../models/Project";
import Todo from "../models/Todo";

function saveProjects(projects) {

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );
}

function loadProjects() {

    const data =
        localStorage.getItem("projects");

    if (!data) {
        return [];
    }

    const parsedData =
        JSON.parse(data);

    return parsedData.map(projectData => {

        const project =
            new Project(projectData.name);

        project.id =
            projectData.id;

        project.todos =
            projectData.todos.map(todoData => {

                const todo =
                    new Todo(
                        todoData.title,
                        todoData.description,
                        todoData.dueDate,
                        todoData.priority
                    );

                todo.id =
                    todoData.id;

                todo.completed =
                    todoData.completed;

                return todo;
            });

        return project;
    });
}

export {
    saveProjects,
    loadProjects
};