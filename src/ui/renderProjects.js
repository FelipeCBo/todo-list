export default function renderProjects(projects) {
    const container = document.getElementById("projects");

    container.innerHTML = "";

    projects.forEach(project => {
        const div = document.createElement("div");

        div.classList.add("project-card");

        div.textContent = project.name;

        container.appendChild(div);
    });
}