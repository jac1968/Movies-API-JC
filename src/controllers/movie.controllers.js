const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const Genre = require('../models/Genre');
const Director = require('../models/Director');

        //   C O N T R O L L E R S      C R U D   //

// getAll -  get all movies
const getAll = catchError(async(req, res) => {
    const results = await Movie.findAll({include:[Genre, Actor, Director]});
    return res.json(results);
});

// create -  create movie
const create = catchError(async(req, res) => {
    const result = await Movie.create(req.body);
    return res.status(201).json(result);
});

// getOne -  get one movie for id
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.findByPk(id, {include:[Genre, Actor, Director]}); 
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

// remove -  delete one movie for id
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

// update -  update one movie for id
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

// setActors - set actors to movie
const setActors = catchError(async(req, res) => {
    const {id} = req.params
    const movie = await Movie.findByPk(id)
    await movie.setActors(req.body)
    const actors = await movie.getActors()
    return res.json(actors)
})

// setDirectors -  set director to movie
const setDirectors = catchError(async(req, res) => {
    const {id} = req.params
    const movie = await Movie.findByPk(id)
    await movie.setDirectors(req.body)
    const directors = await movie.getDirectors()
    return res.json(directors)
})

// setGenres - set genre to movie
const setGenres = catchError(async(req, res) => {
    const {id} = req.params
    const movie = await Movie.findByPk(id)
    await movie.setGenres(req.body)
    const genres = await movie.getGenres()
    return res.json(genres)
})

// Exports the controllers
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setActors,
    setDirectors,
    setGenres
}