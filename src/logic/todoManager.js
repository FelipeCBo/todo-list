import Todo from "../models/Todo";

function createTodo(
    project,
    title,
    description,
    dueDate,
    priority
) {
    const todo = new Todo(
        title,
        description,
        dueDate,
        priority
    );

    project.addTodo(todo);

    return todo;
}

export {
    createTodo
};