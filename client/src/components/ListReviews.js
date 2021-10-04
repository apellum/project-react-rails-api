import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

const ListReviews = ({review, currentUser, snack}) => {
    const { id } = useParams();
    const history = useHistory();
    const handleEdit = () => {
        history.push(`/snacks/${id}/reviews/${review.id}`)
    }

    const deleteReview = async () => {
        const response = await fetch(`http://localhost:3001/reviews/${review.id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        const data = await response.json()
        history.push(`/snacks`)
    }

    return (
        <div>
            <li key={review.id}>
                <p>{review.content}</p>
                {currentUser ? <div><button onClick={deleteReview}>Delete Review</button><button onClick={handleEdit}>Edit Review</button></div>: null}
            </li>
        </div>
    )
}

export default ListReviews
