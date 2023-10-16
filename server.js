const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./sequelize");
const Task = require("./models/task");

const app = express();

app.use(bodyParser.json());

// Ruta para obtener todas las tareas
app.get("/tasks", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// Ruta para obtener una tarea por su id
app.post("/tasks", async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description });
  res.json(task);
});

// Inicialización de Sequelize y servidor Express
async function initialize() {
  try {
    await sequelize.sync(); // Sincroniza los modelos con la base de datos
    app.listen(3000, () => {
      console.log("Servidor escuchando el puerto 3000");
    });
  } catch (error) {
    console.error("Error al inicializar la aplicación: ", error);
  }
}

initialize();