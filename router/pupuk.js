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

// Route untuk memperbarui pupuk berdasarkan ID
router.put('/:id', (req, res) => {
    const { id } = req.params; // Mengambil ID dari parameter URL
    const { Nama, stok, Harga } = req.body; // Mengambil data dari body

    // Mencari index pupuk berdasarkan ID
    const index = pupuk.findIndex(p => p.id === id);

    if (index !== -1) {
        // Memperbarui data pupuk
        pupuk[index] = { id, Nama, stok, Harga };
        res.json({ message: 'Pupuk berhasil diperbarui.', pupuk: pupuk[index] });
    } else {
        res.status(404).json({ message: 'Pupuk tidak ditemukan.' });
    }
});

// DELETE to remove a pupuk by ID
router.delete('/', (req, res) => {
    const { id } = req.body; // Mengambil ID dari body
    const index = pupuk.findIndex(p => p.id === id); // Mencari index pupuk berdasarkan ID

    if (index !== -1) {
        pupuk.splice(index, 1); // Menghapus pupuk dari array
        res.json({ message: 'Pupuk berhasil dihapus.' });
    } else {
        res.status(404).json({ message: 'Pupuk tidak ditemukan.' });
    }
});

module.exports = router;