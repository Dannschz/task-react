const Project = require('../models/Projects');

const ProjectController = function () {

    this.getProjects = async function (req, res) {
        try {
            const projects = await Project.find();
            res.json(projects)
        } catch (error) {
            res.status(400).json({
                error: error
            });
        }
    }

    this.getProjectId = async function (req, res) {
        try {
            const project = await Project.findById(req.params.id);
            res.json(project);
        } catch (error) {
            res.status(400).json({
                error: error
            });
        }
    }

    this.createProject = async function (req, res) {
        const { name } = req.body;
        const newProject = new Project({
            name
        });
        await newProject.save(error => console.error(error));
        res.json('New Project saved');
    }


};

module.exports = new ProjectController;