const express = require('express');

const router = express.Router();

const pupuk = [
    {
        id: "01",
        Nama: "pupuk urea",
        stok: "100",
        Harga: 12000,
    },
    {
        id: "02",
        Nama: "pupuk kompos",
        stok: "150",
        Harga: 20000,
    },
    {
        id: "03",
        Nama: "pupuk npk",
        stok: "200",
        Harga: 30000,
    },
];

// GET all pupuk
router.get('/', (req, res) => {
    res.json(pupuk);
});

