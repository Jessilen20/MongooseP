const joke = require("../models/jokes.model");

//obtener todos los chistes
module.exports.obtenerTodosChistes = (req, res) => {
    joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

//obtener un chiste
module.exports.obtenerUnChiste = (req, res) =>{
    joke.find({_id: req.params.id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

//crear un chiste
module.exports.crearChiste = (req,res) =>{
    joke.create(req.body)
        .then( newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

//actualizar un chiste

module.exports.actualizarChiste = (req, res) =>{
    joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then( actuChiste => res.json({joke : actuChiste}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}

//eliminar un chiste

module.exports.eliminarChiste = (req,res) =>{
    joke.deleteOne({ _id: req.params.id })
        .then( borrarChiste => res.json({result: borrarChiste}))
        .catch(err => res.json({message: "Something went wrong", error: err}));
}