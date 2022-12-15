import { Link,useHistory} from "react-router-dom";
import React,{useState} from 'react';
import { auth } from './firebase';
import "./Login.css";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = event =>{
        event.preventDefault(); //this stops the refresh!!!
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in , redirect to homepage...
            history.push("/");
        })
        .catch((e)=>alert(e.message));
    };
    const register = event =>{
        event.preventDefault(); //this stops the refresh!!!
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //created a user and logged in, redirect to homepage..
            history.push("/");
        })
        .catch((e)=>alert(e.message));

    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                <h5>Email</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onClick={login} type="submit" className="login__signInButton btn-warning">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Conditions of Use</a> and<a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"> Privacy Notice</a>.</p>
            </div>
            <div className="login__signup">
            <h5>New to Amazon?</h5>
                <button onClick={register}>Create your Amazon account</button>
            </div>
            
        </div>
    )
}

export default Login;
