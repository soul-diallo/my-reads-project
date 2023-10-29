import React, { Component } from 'react';
import axios from 'axios';

import books from "../books.json";
import Booke from "./Booke";

class BookList extends Component {
    componentDidMount() {
        // Exemple d'une requête GET au serveur Express
        axios.get('http://localhost:5550/books')
            .then(response => {
                const books = response.data;
                console.log(books); // Faites quelque chose avec les données reçues
            })
            .catch(error => console.error('Erreur:', error));
    }

    render() {
        return (
            <div>
                <h1>Liste des Livres</h1>
                <ul>
                    {books.map(book => (
                        <Booke key={book.id} book={book} onUpdate={shelf => console.log(shelf)} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default BookList;
