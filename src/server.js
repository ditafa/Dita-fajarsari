import express from 'express';
import booksRouter from './routes/books.js'; // Mengimpor router dari books.js

const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Menggunakan rute buku
app.use('/books', booksRouter); // Mengintegrasikan router books

// Endpoint dasar
app.get('/', (req, res) => {
    res.send('Welcome to the Bookshelf API');
});

// Middleware untuk menangani kesalahan secara global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!'); // Mengirimkan respon error
});

// Memulai server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
