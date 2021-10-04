import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditReviews = () => {

    const { id, review_id } = useParams()
    const [review, setReview] = useState(null)
    const [editForm, setEditForm] = useState({
        content: ""
    })
    const history = useHistory()

    useEffect(() => {
        const getReview = async () => {
            const resp = await fetch(`http://localhost:3001/reviews/${review_id}`)
            const data = await resp.json()
            setReview(data)
            setEditForm({
                content:data.content
            })
        }
        getReview()
    }, [])

    const handleChange = e => {
        setEditForm({
            ...editForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const resp = await fetch(`/reviews/${review.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...editForm})
        })
        const data = await resp.json()
        history.push(`/snacks/${id}`)
    }

    return (
        <div>
            <h3>Edit Review</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="content" value={editForm.content} onChange={handleChange} />
                <input type="submit" placeholder="edit review"/>
            </form>
        </div>
    )
}

export default EditReviews
