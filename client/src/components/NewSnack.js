import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const NewSnack = () => {
    const [state, setState] = useState({
        name: "",
        category: "",
        price: 0.0,
        rating: 0
    })

    const [content, setContent] = useState('');
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const history = useHistory();

    const loadUser = async () => {
        const resp = await fetch('http://localhost:3001/users/1');
        const data = await resp.json();
        setUser(data);
        setLoading(false);
    }

    useEffect(() => {
        loadUser();
    }, [])

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:3001/snacks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                ...state,
                reviews_attributes: [
                    {
                        content,
                        user_id: user.id
                    }
                ]
            })
        })
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
