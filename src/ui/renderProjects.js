export default function renderProjects(
    projects,
    currentProject,
    onProjectClick
) {
    const container =
        document.getElementById("projects");

    container.innerHTML = "";

    projects.forEach(project => {

        const div =
            document.createElement("div");

        div.classList.add("project-card");

        if (project.id === currentProject.id) {
            div.classList.add("active-project");
        }

        div.textContent = project.name;

        div.addEventListener("click", () => {
            onProjectClick(project);
        });

        container.appendChild(div);
    });
}