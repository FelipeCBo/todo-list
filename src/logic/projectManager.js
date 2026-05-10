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

export {
    createProject,
    getProjects
};