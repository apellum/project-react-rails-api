import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const NewSnack = () => {
    const [state, setState] = useState({
        name: "",
        category: "",
        price: 0.0,
        rating: 0
    })
    const history = useHistory();

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('/snacks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(state)
        })
        .then(resp => resp.json())
        .then(data => setState(data))
        history.push('/snacks')
    }

    return (
        <div>
            <h2>Add Snack</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Snack name: </label>
                    <input type="text" id="name" name="name" value={state.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="category">Category: </label>
                    <input type="text" id="category" name="category" value={state.category} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" value={state.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="rating">Rating: </label>
                    <input type="number" id="rating" name="rating" value={state.rating} onChange={handleChange} />
                </div>

                <input type="submit" value={"Add Snack"} />
            </form>
        </div>
    )
}

export default NewSnack
