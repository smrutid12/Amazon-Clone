import React from "react";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Footer from "./Footer";
function App() {
  const [{user},dispatch]= useStateValue();

  //useEffect <<<<< POWERFUL
  //piece of code which runs based on a given condITION
 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      //the user is logged in
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }else{
      //user is logged out
      dispatch({
        type:"SET_USER",
        user:null
      })
    }
  });

  return()=>{
    //Any cleanup operations go in here..
    unsubscribe();
  }
 }, []);
console.log(`user====>`,user);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
