import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';
import Header from './Header';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('username : ',username ,'Email: ', email, 'Password:', password);
  };

  return (
    <>
      <div className="relative min-h-screen bg-cover  bg-center" style={{ backgroundImage: `url(${bg})` }}>
      
        <Header className="absolute top-0 left-0 w-full z-10" />
        
        
        <div className="flex items-start py-20 justify-center min-h-screen">
          <div className="bg-black bg-opacity-75 p-8 rounded-lg max-w-md w-full text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="username">username</label>
                <input 
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Enter User Name"
                  required
                  aria-label="Enter User Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email or mobile number</label>
                <input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Email or mobile number"
                  required
                  aria-label="Email or mobile number"
                />
              </div>
            
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  placeholder="Password"
                  required
                  aria-label="Password"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none">Sign Up</button>
            </form>
          
            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">Have An Netflix Account ? <Link to="/login" className="text-white hover:underline">Sign In now.</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
