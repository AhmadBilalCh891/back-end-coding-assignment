const express = require('express');
const router = express.Router();
const taskService = require('./task.service');

// routes
router.post('/create-task', create);
router.get('/list-tasks', getAll);

module.exports = router;

function create(req, res, next) {
    taskService.create(req.body)
        .then(task => res.json(task))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    taskService.getAll()
        .then(tasks => res.json(tasks))
        .catch(err => next(err));
}
