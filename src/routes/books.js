import express from 'express';

const router = express.Router();

// Array untuk menyimpan buku
let books = [];

// Endpoint untuk menambahkan buku baru
router.post('/', (req, res) => {
    const { id, title, author } = req.body;
    const newBook = { id, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Endpoint untuk mendapatkan semua buku
router.get('/', (req, res) => {
    res.json(books);
});

// Endpoint untuk mendapatkan buku berdasarkan id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find(book => book.id === id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Endpoint untuk memperbarui buku berdasarkan id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
        // Memperbarui informasi buku
        books[bookIndex] = { id, title, author };
        res.json(books[bookIndex]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Endpoint untuk menghapus buku berdasarkan id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1);
        res.json(deletedBook[0]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

export default router;
