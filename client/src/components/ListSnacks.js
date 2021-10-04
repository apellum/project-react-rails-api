import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

const ListSnacks = () => {
    const [snacks, setSnacks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/snacks')
            .then(resp => resp.json())
            .then(data => setSnacks(data))
    }, [])

    const snackArray = snacks.map(snack => <li key={snack.id}><NavLink to={`/snacks/${snack.id}`}>{snack.name}</NavLink></li>)

    return (
        <div>
            <h2>Snack List</h2>
            <ul>
                {snackArray}
            </ul>
        </div>
    )
}

export default ListSnacks
