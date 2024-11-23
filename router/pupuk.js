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

// POST a new pupuk
router.post('/', (req, res) => {
    const newPupuk = req.body;

    // Validate the new pupuk data
    if (!newPupuk.id || !newPupuk.Nama || !newPupuk.stok || !newPupuk.Harga) {
        return res.status(400).json({ message: 'Data pupuk tidak lengkap. Pastikan id, Nama, stok, dan Harga diisi.' });
    }

    // Check if the ID already exists
    const existingPupuk = pupuk.find(p => p.id === newPupuk.id);
    if (existingPupuk) {
        return res.status(409).json({ message: 'Pupuk dengan ID ini sudah ada.' });
    }

    // Add the new pupuk to the array
    pupuk.push(newPupuk);
    res.status(201).json({ message: 'Pupuk berhasil ditambahkan.', data: newPupuk });
});

