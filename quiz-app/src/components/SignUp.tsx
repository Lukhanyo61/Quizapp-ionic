import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        email,
        password,
        username,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <button type="button" className="btn"  onClick={handleSignUp}>Sign Up</button>
<div id='or'>
        <button id='go-btn'> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"/> </button>
        <button id='ap-btn'> <img style={{borderRadius:'50%', width:'25px'}} src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-white.png"/></button>
</div>
      </form>
    </div>
  );
};

export default SignUp;
