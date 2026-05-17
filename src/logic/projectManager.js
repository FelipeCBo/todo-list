import Project from "../models/Project";

const projects = [];

function createProject(name) {
    const project = new Project(name);

    projects.push(project);

    return project;
}

function getProjects() {
    return projects;
}

function setProjects(newProjects) {
    projects.length = 0;

    projects.push(...newProjects);
}

export {
    createProject,
    getProjects,
    setProjects
};