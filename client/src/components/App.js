import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getCurrentUser } from "../actions/auth";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ListSnacks from "./ListSnacks";
import NewSnack from "./NewSnack";
import SnackCard from "./SnackCard";
import EditReviews from "./EditReviews";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleCurrentUser = (user) => {
    if (user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
    }
  }

  const logoutCurrentUser = () => {
    setCurrentUser(null);
    setLoggedIn(false);
    setLoading(false);
  }

  useEffect(() => {
    getCurrentUser(handleCurrentUser)
  }, [])

  return (
    <Router>
      <Home loggedIn={loggedIn} currentUser={currentUser}/>
      <NavBar loggedIn={loggedIn} logoutCurrentUser={logoutCurrentUser}/>
      <Switch>
        <div className="App">
          <Route exact path="/snacks" render={(props) => <ListSnacks {...props} />}/>
          <Route exact path="/snacks/:id" render={(props) => <SnackCard {...props} currentUser={currentUser} />}/>
          <Route exact path="/snacks/:id/reviews/:review_id"> <EditReviews currentUser={currentUser} /></Route>
          <Route exact path="/snacks/new" render={(props) => <NewSnack {...props} />}/>
          <Route exact path="/signup" render={props => <Signup {...props} handleCurrentUser={handleCurrentUser}/>}/>
          <Route exact path="/login" render={props => <Login {...props} handleCurrentUser={handleCurrentUser}/>}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
