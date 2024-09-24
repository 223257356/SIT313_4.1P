import React, { useState } from 'react';
import '../styles/Signup.css';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utilities/firebase';

const Signup = () => {
    const [contact, setContact] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = contact;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };

    const handleSubmit = async (event) =>
    {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth (user, {displayName});
            // Handle additional user creation logic here
            // For example, update the user's profile with the display name
            console.log('User created successfully:', user);

        } catch(error) {
            console.error('Error creating user:', error.message);
        }
    };
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Create a DEV@Deakin Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <label>Name*</label>
                        <input
                            type="text"
                            name="displayName"
                            value={displayName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <label>Email*</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <label>Password*</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input">
                        <label>Confirm Password*</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="create-button">Create Account</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
