const tasks = [];

// Obtener todas las tareas
exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

// Agregar una nueva tarea
exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res
      .status(400)
      .json({ error: "El título de la tarea es requerido" });
  }

  const newTask = { id: tasks.length + 1, title };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Obtener una tarea por su id
exports.getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json(task);
};

// Eliminar una tarea por su id
exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
};