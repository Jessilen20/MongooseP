const mongoose = require("mongoose");

//se uso 0.0.0.0 en lugar de localhost
mongoose.connect('mongodb://0.0.0.0:27017/db_jokes', {
    useNewUrlParser: true,
	useUnifiedTopology: true,
})
    .then(() => console.log("Se establece conexion con la base de datos"))
    .catch(err => console.log("Hay un error", err));

module.exports = mongoose