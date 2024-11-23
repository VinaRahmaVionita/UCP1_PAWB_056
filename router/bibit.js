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

// POST a new bibit
router.post('/', (req, res) => {
    const newBibit = req.body;

    // Validate the new bibit data
    if (!newBibit.id || !newBibit.Nama || !newBibit.stok || !newBibit.Harga) {
        return res.status(400).json({ message: 'Data bibit tidak lengkap. Pastikan id, Nama, stok, dan Harga diisi.' });
    }

    // Check if the ID already exists
    const existingBibit = bibit.find(b => b.id === newBibit.id);
    if (existingBibit) {
        return res.status(409).json({ message: 'Bibit dengan ID ini sudah ada.' });
    }

    // Add the new bibit to the array
    bibit.push(newBibit);
    res.status(201).json({ message: 'Bibit berhasil ditambahkan.', data: newBibit });
});

