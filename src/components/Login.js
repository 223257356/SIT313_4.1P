import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import { signInWithGooglePopup, createUserDocFromAuth, auth } from '../utilities/firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut and onAuthStateChanged from Firebase

const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null); // Track the current user state

    // Handle user authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsubscribe; // Cleanup the listener on unmount
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic for handling email and password login
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleSignOut = async () => {
        await signOut(auth);
        setCurrentUser(null); // Reset user state on sign out
        console.log('User signed out');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                {!currentUser ? (
                    <>
                        <div className="signup-link">
                            <Link to="/signup">Sign up</Link>
                        </div>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Your email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Your password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="login-button">Login</button>
                            <button
                                type="button"
                                onClick={logGoogleUser}
                                className="google-button"
                            >
                                Login with Google
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <h2>Welcome, {currentUser.email}</h2>
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="logout-button"
                        >
                            Sign Out
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Login;
