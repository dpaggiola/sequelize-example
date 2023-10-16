const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/taskController");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rutas
app.get("/tasks", taskController.getAllTasks);
app.post("/tasks", taskController.addTask);
app.get("/tasks/:id", taskController.getTaskById);
app.delete("/tasks/:id", taskController.deleteTask);

app.listen(port, () => {
  console.log(`La aplicación está escuchando el puerto ${port}`);
});
