import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ListReviews from './ListReviews'
import NewReview from './NewReview'
// import { Link } from 'react-router-dom'

const SnackCard = ({currentUser}) => {
    const { id } = useParams();
    const [snack, setSnack] = useState({});
    const [reviews, setReviews] = useState({});
    const [loading, setLoading] = useState(true);

    const loadSnacks = async () => {
        const resp = await fetch(`http://localhost:3001/snacks/${id}`)
        const data = await resp.json();
        setSnack(data);
        setReviews(data.reviews);
    }

    const addReview = (review) => {
        setReviews([...reviews, review])
    }

    useEffect(() => {
        load();
    }, [id])

    const load = async () => {
        await loadSnacks();
        setLoading(false)
    }

    if (loading) return <h1>loading</h1>

    return (
        <>
            <div>
                <h3>Snack:</h3>
                <h4>{snack.name}</h4>
                <p>Category: {snack.category}</p>
                <p>Price: {snack.price}</p>
                <p>Rating: {snack.rating}</p>
            </div>
            <div>
                <h3>Reviews:</h3>
                <ul> {reviews.map((review) => <ListReviews key={review.id} currentUser={currentUser} review={review} /> )}</ul>
                <NewReview snack={snack} currentUser={currentUser} addReview={addReview}/>
            </div>
        </>
    )
}

export default SnackCard
