import React, { useState } from "react";
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateLogin = () => {
        if (email === 'vanshika@gmail.com' && password === 'Vanshika@123') {
            setErrorMessage('');
            alert('Login successful!');
        } else {
            setErrorMessage('Invalid email or password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button onClick={validateLogin}>Login</button>
            {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
    );
};

export default Login;
