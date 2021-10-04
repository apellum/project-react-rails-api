import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createAccount } from '../actions/auth'

const Signup = ({handleCurrentUser}) => {
    const [state, setState] = useState({
        username: '',
        password: ''
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

        createAccount(state, handleCurrentUser)
        history.push('/snacks')
    }


    return (
        <div>
            <h1>Create an Account</h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" value={ state.username} onChange={ handleChange}/>
                </div><br/>
                <div>
                    <label hemlFor="password">Password: </label>
                    <input type="password" id="password" name="password" value={ state.password } onChange={handleChange}/>
                </div><br/>
                <input type="submit" value="Create Account"/>
            </form>
        </div>
    )
}

export default Signup
