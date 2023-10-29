import React from 'react';

const Booke = ({ title, author, shelf }) => {
    return (
        <div className="book">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Shelf: {shelf}</p>
        </div>
    );
}

export default Booke;
