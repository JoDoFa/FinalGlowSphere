import React from 'react';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header>
        {/* Add Navbar content here if needed */}
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        {/* Text Section */}
        <div className="hero-text">
          <h1>
            Discover Your Natural <span className="highlight">Glow</span>
          </h1>
          <p>
            Experience luxury skincare with our premium collection of natural and
            effective products.
          </p>
          <div className="button-group">
            <button>Shop Now</button>
            <button>Explore Categories</button>
            <button>My Account</button>
          </div>
        </div>

        {/* Image Section */}
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
          {/* Product Card 1 */}
          <div className="product-card">
            <img
              src="https://www.elyswimbledon.co.uk/cdn/shop/files/la-mer-la-mer-creme-de-la-mer-moisturizing-cream-31759324315733_1600x.jpg?v=1726505068"
              alt="La Mer Cream"
            />
            <h3>La Mer Cream</h3>
            <p>Luxury Skincare</p>
            <button>Add to Cart</button>
          </div>

          {/* Product Card 2 */}
          <div className="product-card">
            <img
              src="https://www.garnier.co.uk/-/media/project/loreal/brand-sites/garnier/emea/uk/en-gb/articles/skin-care/ingredient/aloe-vera/aloe-veratoner-600x400.png?w=950&rev=6e84eb8db13d4b92b16b50c2fe7730e2&hash=F2FCF684D8F37E037836E86BC51FF7EE"
              alt="Aloe Vera Toner"
            />
            <h3>Aloe Vera Toner</h3>
            <p>Natural Ingredients</p>
            <button>Add to Cart</button>
          </div>

          {/* Product Card 3 */}
          <div className="product-card">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ea04a52b0a5f05e8cc2d566/1611804368879-LLL5S1RGGSJW72B67R5C/Screen+Shot+2021-01-27+at+10.23.47+PM.png"
              alt="Effective Skincare Product"
            />
            <h3>Placeholder Product</h3>
            <p>Effective for Skin</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
