  const db = require("../dbConfig");

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks")
    .join("projects", "tasks.projectId", "projects.projectId")
    .select(
      "tasks.taskId",
      "projects.title",
      "projects.projectDescription",
      "tasks.taskDescription",
      "tasks.completed"
    );
}

function getProjectById(id) {
  return db("projects").where({ projectId: id });
}

function getFullProjectDataById(id) {
  return db.raw(
    db("projects")
      .select(
        "projects.projectId",
        "projects.title",
        "projects.projectDescription",
        "projects.completed"
      )

      .join("tasks", "projects.projectId", "tasks.projectId")
      .select(
        "tasks.taskID",
        "tasks.taskDescription",
        "tasks.notes",
        "tasks.completed"
      )

      .join(
        "projectResources",
        "projects.projectId",
        "projectResources.projectId"
      )
      .join("resources", "projectResources.resourceId", "resources.resourceId")
      .select(
        "projectResources.id",
        "resources.resourceName",
        "resources.resourceDescription"
      )
      .where({ "projects.projectId": id })
  );
}

function getResourcesById(id) {
  return db("resources").where({ resourceId: id });
}

function getTaskById(id) {
  return db("resources").where({ taskID: id });
}

function addProject(payload) {
  return db("projects").insert(payload);
}

function addResource(payload) {
  return db("resources").insert(payload);
}

function addTask(payload) {
  return db("tasks").insert(payload);
}

module.exports = {
  getProjects,
  getResources,
  getTasks,
  getProjectById,
  getFullProjectDataById,
  getResourcesById,
  getTaskById,
  addResource,
  addProject,
  addTask
};