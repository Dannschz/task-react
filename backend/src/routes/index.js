const router = require('express').Router();
const { createProject, getProjects, getProjectId } = require('../controllers/ProjectController');

router.get('/api/tasks/', getProjects);

router.get('/api/tasks/:id', getProjectId);

router.post('/api/tasks', createProject);



module.exports = router;