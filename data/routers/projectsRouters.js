const express = require("express");
const projects = require("../helpers/projectsModels");

const router = express.Router();

router.get("/projects", (req, res) => {
  projects
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/projects/:id", (req, res) => {
  projects
    .getFullProjectDataById(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error.message);
    });
});

router.get("/resources", (req, res) => {
  projects
    .getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.get("/tasks", (req, res) => {
  projects
    .getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.post("/projects", (req, res) => {
  projects
    .addProject(req.body)
    .then(newId => {
      res
        .status(201)
        .json(`This project was successfully created with the id: ${newId}`);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).json({ message: "Failed to add new project" });
    });
});

router.post("/resources", (req, res) => {
  projects
    .addResource(req.body)
    .then(newId => {
      res
        .status(201)
        .json(`This resource was successfully created with the id: ${newId}`);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).json({ message: "Failed to add new resource" });
    });
});

router.post("/tasks", (req, res) => {
  projects
    .addTask(req.body)
    .then(newId => {
      res
        .status(201)
        .json(`This task was successfully created with the id: ${newId}`);
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).json({ message: "Failed to add new task" });
    });
});

module.exports = router;