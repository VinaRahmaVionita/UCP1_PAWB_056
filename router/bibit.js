const express = require('express');

const router = express.Router();

let bibit = [
    {
        id: "1",
        Nama: "semangka",
        stok: "100",
        Harga: 30000,
    },
    {
        id: "2",
        Nama: "kiwi",
        stok: "90",
        Harga: 70000,
    },
    {
        id: "3",
        Nama: "anggur",
        stok: "150",
        Harga: 90000,
    },
];

// GET all bibit
router.get("/", (req, res) => {
    res.send(bibit);
});

