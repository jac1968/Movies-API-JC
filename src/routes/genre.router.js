const { getAll, create, getOne, remove, update } = require('../controllers/genre.controllers');
const express = require('express');

const routerGenre = express.Router();

// static routes
routerGenre.route('/')
    .get(getAll)
    .post(create);

// dynamic routes
routerGenre.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerGenre;