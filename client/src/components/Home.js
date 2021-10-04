import React from 'react'

const Home = ({loggedIn, currentUser}) => {
    return (
        <div>
            {/* <h3>{loggedIn?  <div>Rate your favorite snacks {currentUser.username}!</div> : <div>Rate your favorite snacks!</div>}</h3> */}
            <h3>Rate your favorite snacks!</h3>
        </div>
    )
}

export default Home
