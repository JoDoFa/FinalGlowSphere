import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState(null); // State for modal content
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Function to open the modal with specific product data
  const openModal = (product) => {
    setModalData(product);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const products = [
    {
      id: 1,
      name: 'La Mer Cream',
      description: 'Luxury Skincare to rejuvenate and hydrate your skin.',
      price: '$350',
      image: 'https://www.elyswimbledon.co.uk/cdn/shop/files/la-mer-la-mer-creme-de-la-mer-moisturizing-cream-31759324315733_1600x.jpg?v=1726505068',
    },
    {
      id: 2,
      name: 'Aloe Vera Toner',
      description: 'Natural toner with aloe vera to refresh your skin.',
      price: '$20',
      image: 'https://www.garnier.co.uk/-/media/project/loreal/brand-sites/garnier/emea/uk/en-gb/articles/skin-care/ingredient/aloe-vera/aloe-veratoner-600x400.png?w=950&rev=6e84eb8db13d4b92b16b50c2fe7730e2&hash=F2FCF684D8F37E037836E86BC51FF7EE',
    },
    {
      id: 3,
      name: 'Placeholder Product',
      description: 'Effective skincare product for daily use.',
      price: '$50',
      image: 'https://images.squarespace-cdn.com/content/v1/5ea04a52b0a5f05e8cc2d566/1611804368879-LLL5S1RGGSJW72B67R5C/Screen+Shot+2021-01-27+at+10.23.47+PM.png',
    },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <header>
        <h1>GlowSphere</h1>
        <nav>
          <ul>
            <li><button onClick={() => navigate('/')}>Home</button></li>
            <li><button onClick={() => navigate('/products')}>Products</button></li>
            <li><button onClick={() => navigate('/cart')}>Cart</button></li>
            <li><button onClick={() => navigate('/account')}>Account</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            Discover Your Natural <span className="highlight">Glow</span>
          </h1>
          <p>
            Experience luxury skincare with our premium collection of natural and effective products.
          </p>
          <div className="button-group">
            <button onClick={() => navigate('/products')}>Shop Now</button>
            <button onClick={() => navigate('/products')}>Explore Categories</button>
            <button onClick={() => navigate('/account')}>My Account</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/7032/articles/Start-a-Skincare-Line_Islenia-Mil_Email_68bb4b03-2c18-4f2c-9f11-81dce299083a.jpg?v=1730479484&originalWidth=1848&originalHeight=782&width=1400"
            alt="Skincare line"
          />
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products">
        <h2>Featured Skin Care Products</h2>
        <div className="product-cards">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button onClick={() => openModal(product)}>View Details</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={modalData.image} alt={modalData.name} />
            <h3>{modalData.name}</h3>
            <p>{modalData.description}</p>
            <h4>{modalData.price}</h4>
            <button onClick={() => navigate('/checkout')}>Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
