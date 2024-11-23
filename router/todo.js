const express = require('express');
const router = express.Router();

const todos = [
    {
        id: 1,
        task: "Tugas CRUD",
        completed: false
    },
    {
        id: 2,
        task: "Tugas API",
        completed: false
    }
];

// GET all todos
router.get('/', (req, res) => { res.json(todos); });

// POST a new todo
router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});


module.exports = router;

// DELETE a todo
router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ message: 'Tugas Tidak Ditemukan' });

    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.status(200).json({ message: `Tugas ${deletedTodo.task} telah dihapus` });
});

// UPDATE a todo
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Tugas Tidak Ditemukan' });

    todo.task = req.body.task || todo.task;

    res.status(200).json({
        message: `Tugas dengan ID ${todo.id} telah diperbarui`,
        updatedTodo: todo
    });
});

module.exports = router;
