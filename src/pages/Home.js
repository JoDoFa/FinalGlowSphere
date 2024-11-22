import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <div className="welcome-container">
        <h2><i className="fa fa-home"></i> Welcome to the Online Shop</h2>
        <p>Browse through our wide selection of products and enjoy a seamless shopping experience!</p>
      </div>

      <div className="button-container">
        <button className="shop-now-btn">Shop Now</button>
        <button className="explore-btn">Explore Categories</button>
        <button className="account-btn">My Account</button>
      </div>
    </div>
  );
}

export default Home;
