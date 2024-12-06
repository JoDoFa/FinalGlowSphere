import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState(null); // State for modal content
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = (product) => {
    setModalData(product);
    setIsModalOpen(true);
  };

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
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>
            Discover Your Natural <span className="highlight">Glow</span>
          </h1>
          <p>Experience luxury skincare with our premium collection of natural and effective products.</p>
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
            <button
              className="close-button"
              style={{
                color: '#ffffff',
                fontSize: '40px',
                backgroundColor: '#770000',
                border: 'none',
                borderRadius: '0',
                padding: '10px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgb(102, 0, 0)')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#770000')}
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={modalData.image} alt={modalData.name} />
            <h3>{modalData.name}</h3>
            <p>{modalData.description}</p>
            <h4>{modalData.price}</h4>
            <button onClick={() => navigate('/checkout')}>Buy Now</button>
            {/* Updated Links Section */}
            <div style={{ marginTop: '10px' }}>
              <a
                href="/learn-more"
                style={{ color: 'blue', textDecoration: 'underline', marginRight: '10px' }}
              >
                Learn More
              </a>
              <a
                href="/contact-us"
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: '#f8c9c9', 
          color: 'white', 
          textAlign: 'center', 
          padding: '20px', 
          marginTop: '20px',
        }}
      >
        <div>
          <h3>BEAUTYBAR</h3>
          <p>WHERE BEAUTY COMES TOGETHER</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: <a href="mailto:custserv@beautybar.com.ph" style={{ color: 'white' }}>custserv@beautybar.com.ph</a></p>
          <p>Phone: <a href="tel:+63288305000" style={{ color: 'white' }}>(02) 8830 5000</a></p>
        </div>

        <div>
  <h4>Navigation</h4>
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li>
      <button
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        onClick={() => console.log('Brands clicked')}
      >
        Brands
      </button>
    </li>
    <li>
      <button
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        onClick={() => console.log('Makeup clicked')}
      >
        Makeup
      </button>
    </li>
    <li>
      <button
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        onClick={() => console.log('Skincare clicked')}
      >
        Skincare
      </button>
    </li>
    <li>
      <button
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
        onClick={() => console.log('Hair clicked')}
      >
        Hair
      </button>
    </li>
  </ul>
</div>


        <div>
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" style={{ width: '30px', margin: '5px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" style={{ width: '30px', margin: '5px' }} />
          </a>
        </div>

        <div>
          <p>© 2024 Beauty Bar Philippines. All Rights Reserved.</p>
        </div>

        {/* Additional Footer Content */}
        <p>&copy; 2024 Skincare Co. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'underline' }}>
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms-of-service" style={{ color: '#fff', textDecoration: 'underline' }}>
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;