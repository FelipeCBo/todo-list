export default function renderTodos(project) {
    const container = document.getElementById("todos");

    container.innerHTML = "";

    project.todos.forEach(todo => {
        const div = document.createElement("div");

        div.classList.add("todo-card");

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <small>${todo.dueDate}</small>

            <button class="delete-btn"
                data-id="${todo.id}">
                Delete
            </button>
        `;

        container.appendChild(div);
    });
}