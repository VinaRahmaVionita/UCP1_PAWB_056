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

// Route untuk memperbarui bibit berdasarkan ID
router.put('/:id', (req, res) => {
    const { id } = req.params; // Mengambil ID dari parameter URL
    const { Nama, stok, Harga } = req.body; // Mengambil data dari body

    // Mencari index bibit berdasarkan ID
    const index = bibit.findIndex(b => b.id === id);

    if (index !== -1) {
        // Memperbarui data bibit
        bibit[index] = { id, Nama, stok, Harga };
        res.json({ message: 'Bibit berhasil diperbarui.', bibit: bibit[index] });
    } else {
        res.status(404).json({ message: 'Bibit tidak ditemukan.' });
    }
});

// DELETE to remove a bibit by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params; // Mengambil ID dari parameter URL
    const index = bibit.findIndex(b => b.id === id); // Mencari index bibit berdasarkan ID

    if (index !== -1) {
        bibit.splice(index, 1); // Menghapus bibit dari array
        res.json({ message: 'Bibit berhasil dihapus.' });
    } else {
        res.status(404).json({ message: 'Bibit tidak ditemukan.' });
    }
});

module.exports = router; // Menggunakan module.exports untuk ekspor