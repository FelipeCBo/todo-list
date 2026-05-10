export default function renderProjects(projects) {
    console.log("RECEBIDO:");
    console.log(projects);

    const container = document.getElementById("projects");

    console.log(container);

    container.innerHTML = "";

    projects.forEach(project => {
        const div = document.createElement("div");

        div.textContent = project.name;

        container.appendChild(div);
    });
}