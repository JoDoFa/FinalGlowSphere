import React, { useState } from 'react';

function Account() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = () => {
    // Logic for updating account details
    console.log('Update account details:', { username, password });
  };

  const handleDelete = () => {
    // Logic for deleting the account
    console.log('Account deleted');
  };

  const handleLogout = () => {
    // Logic for logging out
    console.log('Logged out');
  };

  return (
    <div className="account-container">
      <h2><i className="fa fa-user"></i>Your Account</h2>
      <p>Manage your account details and preferences.</p>

      {/* Username Input */}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>

      {/* Password Input */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      {/* Buttons */}
      <button onClick={handleUpdate}>Update Account</button>
      <button onClick={handleDelete}>Delete Account</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Account;
