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

function removeTodo(project, todoId) {
    project.removeTodo(todoId);
}

export {
    createTodo,
    removeTodo
};