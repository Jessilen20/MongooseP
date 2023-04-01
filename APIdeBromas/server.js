const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const todosRutasChistes = require("./server/routes/jokes.routes");
todosRutasChistes(app);


app.listen(8000, () => console.log("El servisor esta levantado en el puerto 8000"));


