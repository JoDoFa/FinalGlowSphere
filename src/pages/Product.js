import React from 'react';

function Products() {
  return (
    <div className="products-container">
      <h2>Skincare Products</h2>
      <p>Explore our wide range of skincare products, categorized to help you find the perfect solution for your skin's needs!</p>

      {/* Face Care Category */}
      <div className="category">
        <h3 className="category-title">Face Care</h3>
        <div className="product-card-container">
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Glow Serum" className="product-image"/>
            <h3 className="product-title">Glow Serum</h3>
            <p className="product-price">$35.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Hydrating Moisturizer" className="product-image"/>
            <h3 className="product-title">Hydrating Moisturizer</h3>
            <p className="product-price">$45.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Charcoal Facial Mask" className="product-image"/>
            <h3 className="product-title">Charcoal Facial Mask</h3>
            <p className="product-price">$28.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Brightening Cream" className="product-image"/>
            <h3 className="product-title">Brightening Cream</h3>
            <p className="product-price">$38.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          {/* Additional Products in Face Care */}
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Anti-aging Cream" className="product-image"/>
            <h3 className="product-title">Anti-aging Cream</h3>
            <p className="product-price">$55.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Vitamin C Serum" className="product-image"/>
            <h3 className="product-title">Vitamin C Serum</h3>
            <p className="product-price">$42.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Body Care Category */}
      <div className="category">
        <h3 className="category-title">Body Care</h3>
        <div className="product-card-container">
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Body Lotion" className="product-image"/>
            <h3 className="product-title">Soothing Body Lotion</h3>
            <p className="product-price">$25.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Exfoliating Scrub" className="product-image"/>
            <h3 className="product-title">Exfoliating Scrub</h3>
            <p className="product-price">$40.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Hand Cream" className="product-image"/>
            <h3 className="product-title">Intensive Hand Cream</h3>
            <p className="product-price">$18.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Body Butter" className="product-image"/>
            <h3 className="product-title">Rich Body Butter</h3>
            <p className="product-price">$50.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          {/* Additional Products in Body Care */}
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Sugar Scrub" className="product-image"/>
            <h3 className="product-title">Sugar Scrub</h3>
            <p className="product-price">$35.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Aloe Vera Gel" className="product-image"/>
            <h3 className="product-title">Aloe Vera Gel</h3>
            <p className="product-price">$18.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Hair Care Category */}
      <div className="category">
        <h3 className="category-title">Hair Care</h3>
        <div className="product-card-container">
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Shampoo" className="product-image"/>
            <h3 className="product-title">Revitalizing Shampoo</h3>
            <p className="product-price">$20.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Conditioner" className="product-image"/>
            <h3 className="product-title">Nourishing Conditioner</h3>
            <p className="product-price">$22.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Hair Mask" className="product-image"/>
            <h3 className="product-title">Repairing Hair Mask</h3>
            <p className="product-price">$30.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Hair Serum" className="product-image"/>
            <h3 className="product-title">Hair Growth Serum</h3>
            <p className="product-price">$40.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          {/* Additional Products in Hair Care */}
          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Dry Shampoo" className="product-image"/>
            <h3 className="product-title">Dry Shampoo</h3>
            <p className="product-price">$15.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/300x200" alt="Leave-in Conditioner" className="product-image"/>
            <h3 className="product-title">Leave-in Conditioner</h3>
            <p className="product-price">$25.00</p>
            <div className="product-buttons">
              <button className="view-details-btn">View Details</button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
