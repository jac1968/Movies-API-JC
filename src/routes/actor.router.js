const { getAll, create, getOne, remove, update } = require('../controllers/actor.controllers');
const express = require('express');

const routerActor = express.Router();

// static routes
routerActor.route('/')
    .get(getAll)
    .post(create);

// dynamic routes
routerActor.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerActor;