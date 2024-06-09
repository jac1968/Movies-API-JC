// Models import
const Movie = require("./Movie");
const Actor = require("./Actor");
const Genre = require("./Genre");
const Director = require("./Director");

//            Declaration of N - N relationships

// 1.- Relationships Movie - Actor
Movie.belongsToMany(Actor, {through: 'moviesActors'})
Actor.belongsToMany(Movie, {through: 'moviesActors'})

// 2.- Relationships Movie - Director
Movie.belongsToMany(Director, {through: 'moviesDirectors'})
Director.belongsToMany(Movie, {through: 'moviesDirectors'})

// 3.- Relationships Movie - Genre
Movie.belongsToMany(Genre, {through: 'moviesGenres'})
Genre.belongsToMany(Movie, {through: 'moviesGenres'})
