const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const booksFilePath = path.join(__dirname, 'books.json');

let books = [];

// Vérifie si le fichier JSON existe, sinon le crée
if (fs.existsSync(booksFilePath)) {
    const booksData = fs.readFileSync(booksFilePath);
    books = JSON.parse(booksData);
} else {
    fs.writeFileSync(booksFilePath, '[]');
}

app.get('/books', (req, res) => {
    res.json(books);
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { shelf } = req.body;

    const updatedBooks = books.map(book => {
        if (book.id === id) {
            book.shelf = shelf;
        }
        return book;
    });

    fs.writeFileSync(booksFilePath, JSON.stringify(updatedBooks, null, 2));

    res.json({ message: 'Livre mis à jour avec succès' });
});

app.post('/search', (req, res) => {
    const { query } = req.body;

    // Implémentez la logique de recherche ici
    // Assurez-vous de renvoyer une liste de livres correspondant à la recherche.

    res.json([]); // Renvoie une liste vide pour cet exemple
});

const PORT = process.env.PORT || 5550;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
