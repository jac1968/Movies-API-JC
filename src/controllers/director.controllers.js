const catchError = require('../utils/catchError');
const Director = require('../models/Director');
const Movie = require('../models/Movie');

        //   C O N T R O L L E R S      C R U D   //

        // getAll -  get all Directors
const getAll = catchError(async(req, res) => {
    const results = await Director.findAll({include:[Movie]});
    return res.json(results);
});

// create -  create Director
const create = catchError(async(req, res) => {
    const result = await Director.create(req.body);
    return res.status(201).json(result);
});

// getOne -  get one Director for id
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Director.findByPk(id, {include:[Movie]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

// remove -  delete one Director for id
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Director.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

// update -  update one Director for id
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Director.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

// Exports the controllers
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}