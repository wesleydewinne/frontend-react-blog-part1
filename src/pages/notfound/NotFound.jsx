import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h3>Deze pagina URL is niet gevonden</h3>
            <p><Link to="/">klik hier</Link> om terug te gaan naar de homepage</p>
        </>
    );
}

export default NotFound;