import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID' : "628e3c6d-e382-4191-90be-0607a003aa6c",
            'User-Name' : username,
            'User-Secret' : password
        }

        try {
            await axios.get("https://api.chatengine.io/chats", {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            setError("🥲 Oopps ! erreur nom ou de mot de passe")
        }
    }

  return (
    <div className='wrapper'>
        <div className='form'>
            {/* <img className='img' src={devimg} alt='' /> */}
            <h1 className='title'>Dev-241</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Nom utilisateur' required />
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Mot de passe' required />

                <div align="center">
                    <button type='submit' className='button'>
                        <span>Demarrer la session</span>
                    </button>
                </div>
                <div className='error'> {error} </div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm