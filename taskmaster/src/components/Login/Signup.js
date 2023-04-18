import React, { useState } from 'react';
import '../../CSS/Login.css';

import { Link , useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';


const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const {createUser} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/');
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  }

  return (
    <div className="COMPONENT-BODY">
      <div className="loginWrapper">
        <h1 className='logintitle'>Sign up for an account.</h1>
        <p className='logintitle'>Already have an account? <Link to='/login' className='logintitle-si'>Sign in.</Link></p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <p>Email</p>
            <input type="text" onChange={e => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;