const jokesController = require("../controllers/jokes.controller");

module.exports = app =>{
    app.get("/api/jokes/", jokesController.obtenerTodosChistes);
    app.get("/api/jokes/:id", jokesController.obtenerUnChiste);
    app.put("/api/jokes/update/:id",jokesController.actualizarChiste);
    app.post("/api/jokes/create",jokesController.crearChiste);
    app.delete("/api/jokes/delete/:id", jokesController.eliminarChiste)
}