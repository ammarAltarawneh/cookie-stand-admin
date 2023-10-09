import React, { useState } from 'react';
import { authenticateUser } from '../data'; 

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (authenticateUser(username, password)) {
      onLogin(username, password);
    } else {
     
      console.log('Authentication failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="mb-4 text-2xl font-semibold text-center text-stone-600">
        Welcome to Cookie Stand Admin
      </header>
      <div className="w-full max-w-sm p-8 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-center text-stone-600">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold bg-orange-400 rounded text-stone-600 hover:bg-orange-300 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;