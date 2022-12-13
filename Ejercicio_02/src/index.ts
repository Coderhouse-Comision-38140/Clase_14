/* Importamos nuestras dependencias */
import express from "express";
import { getTime } from "./lib/utils";
import Persona from "./Persona";

/* Instanciamos nuestras consntantes */
const p: Persona = new Persona("Coder", "House");
const app = express();

/* Funciones */
app.get("/", (req, res) => {
    res.send({
        time: getTime(),
        name: p.getFullName(),
    });
});

/* Configuración del servidor */
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Conectado en el puerto: ", PORT);
});