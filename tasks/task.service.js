const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const mongoose = require('mongoose');
const Task = db.Task;

module.exports = {
    getAll,
    create
};

async function getAll() {
    return await Task.find();
}

async function create(taskParam) {
    // validate
    if (await Task.findOne({ name: taskParam.name })) {
        throw 'Name "' + taskParam.name + '" is already taken';
    }

    const task = new Task({_id:new mongoose.Types.ObjectId(), name:taskParam.name});

    // save user
    await task.save();
    return task;
}
