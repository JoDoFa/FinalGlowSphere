import React, { useState } from 'react';

function Products() {
  // State to store which product's details are visible
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle the View Details click
  const handleViewDetails = (product) => {
    if (selectedProduct === product) {
      setSelectedProduct(null); // Hide details if the same product is clicked
    } else {
      setSelectedProduct(product); // Show details for the clicked product
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-container">
      <h2>Skincare Products</h2>
      <p>Explore our wide range of skincare products, categorized to help you find the perfect solution for your skin's needs!</p>

      {/* Face Care Category */}
      <div className="category">
        <h2 className="category-title">Face Care</h2>
        <div className="product-card-container">
          {/* Product 1 */}
          <div className="product-card">
            <img
              src="https://naturerepublic.com.ph/cdn/shop/files/NE0637_04.jpg?v=1683965556/300x200"
              alt="Glow Serum"
              className="product-image"
            />
            <h3 className="product-title">Cica Glow Serum</h3>
            <p className="product-price">$35.00</p>
            <div className="product-buttons">
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails('Cica Glow Serum')}
              >
                View Details
              </button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <img
              src="https://www.rankandstyle.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Frns-dev%2Fmedia%2Fd0757c27-edbf966e-hero-(77).png&w=640&q=75/300x200"
              alt="Hydrating Moisturizer"
              className="product-image"
            />
            <h3 className="product-title">Elf Skin Hydrating Moisturizer</h3>
            <p className="product-price">$45.00</p>
            <div className="product-buttons">
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails('Elf Skin Hydrating Moisturizer')}
              >
                View Details
              </button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
          {/* Product 3*/}
          <div className="product-card">
            <img
              src="https://saffronskincare.pk/cdn/shop/files/charcoalpeel1.jpg?v=1689235325&width=713/300x200"
              alt="Charcoal Facial Mask"
              className="product-image"
            />
            <h3 className="product-title">Saffron Charcoal Facial Mask</h3>
            <p className="product-price">$28.00</p>
            <div className="product-buttons">
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails('Saffron Charcoal Facial Mask')}
              >
                View Details
              </button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
          {/* Product 4 */}
          <div className="product-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0524/2126/3532/files/Eladi_630_x_427.jpg?v=1666853152/300x200"
              alt="Brightening Cream"
              className="product-image"
            />
            <h3 className="product-title">Shubhr Eladi Brightening Day Cream</h3>
            <p className="product-price">$38.00</p>
            <div className="product-buttons">
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails('Shubhr Eladi Brightening Day Cream')}
              >
                View Details
              </button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          {/* Product 5 */}
          <div className="product-card">
            <img
              src="https://uk.nuxe.com/cdn/shop/articles/nuxe_mag-creme_anti-rides_efficace_1200x672-1.jpg?v=1718120482&width=2048/300x200"
              alt="Anti-aging Cream"
              className="product-image"
            />
            <h3 className="product-title">Nuxuriance Ultra Anti-aging Cream</h3>
            <p className="product-price">$55.00</p>
            <div className="product-buttons">
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails('Nuxuriance Ultra Anti-aging Cream')}
              >
                View Details
              </button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>

          {/* Product 6 */}
          <div className="product-card">
            <img
              src="https://136257520.cdn6.editmysite.com/uploads/1/3/6/2/136257520/s935418478965269894_p375_i3_w1707.jpeg?width=2400&optimize=medium/300x200"
              alt="Vitamin C Serum"
              className="product-image"
            />
            <h3 className="product-title">Glitz Vitamin C Serum</h3>
            <p className="product-price">$42.00</p>
            <div className="product-buttons">
              <button
                className="view-details-btn"
                onClick={() => handleViewDetails('Glitz Vitamin C Serum')}
              >
                View Details
              </button>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
          {/* Body Care Category */}
<div className="category">
  <h2 className="category-title">Body Care</h2>
  <div className="product-card-container">
    <div className="product-card">
      {/* Product 1 */}
      <img src="https://i0.wp.com/www.98fields.com/wp-content/uploads/2021/01/rainforest-body-lotion.jpg?fit=1080%2C1080&ssl=1/300x200" alt="Body Lotion" className="product-image"/>
      <h3 className="product-title">Soothing Body Lotion</h3>
      <p className="product-price">$25.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Soothing Body Lotion')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img src="https://cosmeticom.gr/cdn/shop/products/Screenshot_20210411-000519_Instagram_1000x.jpg?v=1666391527/300x200" alt="Exfoliating Scrub" className="product-image"/>
      <h3 className="product-title">Salt Scrub Green Tea</h3>
      <p className="product-price">$40.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Salt Scrub Green Tea')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img src="https://www.duit.com.au/wp-content/webpc-passthru.php?src=https://www.duit.com.au/wp-content/uploads/2017/07/GT-600x600.jpg&nocache=1/300x200" alt="Hand Cream" className="product-image"/>
      <h3 className="product-title">Intensive Hand Cream</h3>
      <p className="product-price">$18.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Intensive Hand Cream')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img src="https://azafran.in/cdn/shop/products/7-_1_-New_700x.jpg?v=1676866426/300x200" alt="Body Butter" className="product-image"/>
      <h3 className="product-title">Ultra Rich Hydrating Body Butter</h3>
      <p className="product-price">$50.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Ultra Rich Hydrating Body Butter')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    {/* Additional Products in Body Care */}
    <div className="product-card">
      <img src="https://amaninco.com/cdn/shop/products/20220827_225020_0005_1000x1000.png?v=1662408932/300x200" alt="Sugar Scrub" className="product-image"/>
      <h3 className="product-title">Green Apple Sugar Scrub</h3>
      <p className="product-price">$35.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Green Apple Sugar Scrub')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img src="https://pharmalead.gr/wp-content/uploads/2023/07/Pharmalead_AloeVeraGel_V3.jpg/300x200" alt="Aloe Vera Gel" className="product-image"/>
      <h3 className="product-title">Aloe Vera Gel</h3>
      <p className="product-price">$18.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Aloe Vera Gel')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
     {/* Hair Care Category */}
<div className="category">
  <h2 className="category-title">Hair Care</h2>
  <div className="product-card-container">
    <div className="product-card">
      <img 
        src="https://www.nativecos.com/cdn/shop/files/Stilllife_PDP_2in1_EucMint_2_6532b4e4-9135-477a-970a-47aef8f44e25_1240x1550_crop_center.jpg?v=1714486870/300x200" 
        alt="Shampoo" 
        className="product-image" 
      />
      <h3 className="product-title">Scalp Refreshing 2 in 1 Shampoo & Conditioner</h3>
      <p className="product-price">$20.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Scalp Refreshing 2 in 1 Shampoo & Conditioner')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img 
        src="https://thebodyshop.com.ph/cdn/shop/products/TBS_Conditioner_Shea_2_2048x.jpg?v=1656587082/300x200" 
        alt="Conditioner" 
        className="product-image" 
      />
      <h3 className="product-title">Shea Intense Repair Conditioner</h3>
      <p className="product-price">$20.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Shea Intense Repair Conditioner')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img 
        src="https://naturespell.co.uk/cdn/shop/files/NS_GrowthComplexSaltFreeHairMask_Haircare_Ingredient.jpg?crop=center&height=2000&v=1720105425&width=2000/300x200" 
        alt="Hair Mask" 
        className="product-image" 
      />
      <h3 className="product-title">Growth Complex Salt Free Hair Mask</h3>
      <p className="product-price">$30.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Growth Complex Salt Free Hair Mask')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img 
        src="https://naturallyazelia.com/cdn/shop/products/image_e7fb729d-160c-46ac-a13d-c9160f760b55_900x.jpg?v=1670126171/300x200" 
        alt="Hair Serum" 
        className="product-image" 
      />
      <h3 className="product-title">Herbal Hair Growth Serum</h3>
      <p className="product-price">$40.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Herbal Hair Growth Serum')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img 
        src="https://www.usatoday.com/gcdn/presto/2019/09/26/USAT/8c614342-db16-477b-85f8-2bafc931d972-drybar.jpg?crop=2989,2242,x400,y0/300x200" 
        alt="Dry Shampoo" 
        className="product-image" 
      />
      <h3 className="product-title">Detox Dry Shampoo</h3>
      <p className="product-price">$15.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Detox Dry Shampoo')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>

    <div className="product-card">
      <img 
        src="https://themanechoice.com/cdn/shop/products/TMC-H2Oh-Leave-In-Conditioner-Water-Drops_720x.jpg?v=1640112497/300x200" 
        alt="Leave-in Conditioner" 
        className="product-image" 
      />
      <h3 className="product-title">Intense Nourishing Leave-In Conditioner</h3>
      <p className="product-price">$25.00</p>
      <div className="product-buttons">
        <button className="view-details-btn" onClick={() => setSelectedProduct('Intense Nourishing Leave-In Conditioner')}>View Details</button>
        <button className="add-to-cart-btn">Add to Cart</button>
        <button className="buy-btn">Buy</button>
      </div>
    </div>
  </div>
</div>





      {/* Modal for displaying selected product details */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>{selectedProduct}</h2>

            {/* Display details and image based on selected product */}
            {selectedProduct === 'Cica Glow Serum' && (
              <div className="product-details">
                <img
                  src="https://naturerepublic.com.ph/cdn/shop/files/NE0637_04.jpg?v=1683965556/300x200"
                  alt="Cica Glow Serum"
                  className="modal-product-image"
                />
                <p>This serum is designed to hydrate and brighten your skin with its unique blend of Cica extract.</p>
                <p>Price: $35.00</p>
              </div>
            )}

            {selectedProduct === 'Elf Skin Hydrating Moisturizer' && (
              <div className="product-details">
                <img
                  src="https://www.rankandstyle.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Frns-dev%2Fmedia%2Fd0757c27-edbf966e-hero-(77).png&w=640&q=75/300x200"
                  alt="Elf Skin Hydrating Moisturizer"
                  className="modal-product-image"
                />
                <p>This moisturizer provides long-lasting hydration, leaving your skin soft and smooth.</p>
                <p>Price: $45.00</p>
              </div>
            )}
             {selectedProduct === 'Saffron Charcoal Facial Mask' && (
              <div className="product-details">
                <img
                  src="https://saffronskincare.pk/cdn/shop/files/charcoalpeel1.jpg?v=1689235325&width=713/300x200"
                  alt="Saffron Charcoal Facial Mask"
                  className="modal-product-image"
                />
                <p>This facial mask contains activated charcoal, known for its ability to deeply cleanse and detoxify your skin.</p>
                <p>Price: $28.00</p>
          </div>
           )}
           {selectedProduct === 'Shubhr Eladi Brightening Day Cream' && (
              <div className="product-details">
                <img
                  src="https://cdn.shopify.com/s/files/1/0524/2126/3532/files/Eladi_630_x_427.jpg?v=1666853152/300x200"
                  alt="Shubhr Eladi Brightening Day Cream"
                  className="modal-product-image"
                />
                <p>This day cream helps brighten and even out your skin tone, giving you a radiant complexion.</p>
                <p>Price: $38.00</p>
              </div>
            )}

            {selectedProduct === 'Nuxuriance Ultra Anti-aging Cream' && (
              <div className="product-details">
                <img
                  src="https://uk.nuxe.com/cdn/shop/articles/nuxe_mag-creme_anti-rides_efficace_1200x672-1.jpg?v=1718120482&width=2048/300x200"
                  alt="Nuxuriance Ultra Anti-aging Cream"
                  className="modal-product-image"
                />
                <p>This anti-aging cream is designed to reduce fine lines and wrinkles, restoring a youthful appearance.</p>
                <p>Price: $55.00</p>
              </div>
            )}

            {selectedProduct === 'Glitz Vitamin C Serum' && (
              <div className="product-details">
                <img
                  src="https://136257520.cdn6.editmysite.com/uploads/1/3/6/2/136257520/s935418478965269894_p375_i3_w1707.jpeg?width=2400&optimize=medium/300x200"
                  alt="Glitz Vitamin C Serum"
                  className="modal-product-image"
                />
                <p>This Vitamin C serum helps brighten your complexion and reduce the appearance of dark spots.</p>
                <p>Price: $42.00</p>
              </div>
            )}
            {selectedProduct && (
  <div className="product-modal">
    <div className="modal-content">
      <span className="close-btn" onClick={() => setSelectedProduct(null)}>&times;</span>
      {selectedProduct === 'Soothing Body Lotion' && (
        <div className="product-details">
          <img src="https://i0.wp.com/www.98fields.com/wp-content/uploads/2021/01/rainforest-body-lotion.jpg?fit=1080%2C1080&ssl=1/300x200" alt="Soothing Body Lotion" className="modal-product-image"/>
          <p>This soothing body lotion helps keep your skin hydrated and soft.</p>
          <p>Price: $25.00</p>
        </div>
      )}
      {selectedProduct === 'Salt Scrub Green Tea' && (
        <div className="product-details">
          <img src="https://cosmeticom.gr/cdn/shop/products/Screenshot_20210411-000519_Instagram_1000x.jpg?v=1666391527/300x200" alt="Salt Scrub Green Tea" className="modal-product-image"/>
          <p>This exfoliating scrub, enriched with green tea, gently removes dead skin cells.</p>
          <p>Price: $40.00</p>
        </div>
      )}
      {selectedProduct === 'Intensive Hand Cream' && (
        <div className="product-details">
          <img src="https://www.duit.com.au/wp-content/webpc-passthru.php?src=https://www.duit.com.au/wp-content/uploads/2017/07/GT-600x600.jpg&nocache=1/300x200" alt="Intensive Hand Cream" className="modal-product-image"/>
          <p>This hand cream provides deep hydration and nourishment to dry hands.</p>
          <p>Price: $18.00</p>
        </div>
      )}
      {selectedProduct === 'Ultra Rich Hydrating Body Butter' && (
        <div className="product-details">
          <img src="https://azafran.in/cdn/shop/products/7-_1_-New_700x.jpg?v=1676866426/300x200" alt="Ultra Rich Hydrating Body Butter" className="modal-product-image"/>
          <p>This body butter deeply moisturizes and hydrates your skin, leaving it soft and smooth.</p>
          <p>Price: $50.00</p>
        </div>
      )}
      {selectedProduct === 'Green Apple Sugar Scrub' && (
        <div className="product-details">
          <img src="https://amaninco.com/cdn/shop/products/20220827_225020_0005_1000x1000.png?v=1662408932/300x200" alt="Green Apple Sugar Scrub" className="modal-product-image"/>
          <p>This green apple sugar scrub exfoliates and refreshes your skin, leaving it feeling soft.</p>
          <p>Price: $35.00</p>
        </div>
      )}
      {selectedProduct === 'Aloe Vera Gel' && (
        <div className="product-details">
          <img src="https://pharmalead.gr/wp-content/uploads/2023/07/Pharmalead_AloeVeraGel_V3.jpg/300x200" alt="Aloe Vera Gel" className="modal-product-image"/>
          <p>This aloe vera gel is perfect for soothing and moisturizing the skin.</p>
          <p>Price: $18.00</p>
        </div>
      )}
      {selectedProduct === 'Scalp Refreshing 2 in 1 Shampoo & Conditioner' && (
        <div className="product-details">
          <img src="https://www.nativecos.com/cdn/shop/files/Stilllife_PDP_2in1_EucMint_2_6532b4e4-9135-477a-970a-47aef8f44e25_1240x1550_crop_center.jpg?v=1714486870/300x200" alt="Shampoo" className="modal-product-image"/>
          <p>The Scalp Refreshing 2 in 1 Shampoo & Conditioner cleanses and nourishes your scalp while providing hydration and refreshment for your hair.</p>
          <p>Price: $18.00</p>
        </div>
        )}
        {selectedProduct === 'Shea Intense Repair Conditioner' && (
        <div className="product-details">
          <img src="https://thebodyshop.com.ph/cdn/shop/products/TBS_Conditioner_Shea_2_2048x.jpg?v=1656587082/300x200" alt="Conditioner" className="modal-product-image"/>
          <p>The Shea Intense Repair Conditioner deeply moisturizes and repairs dry or damaged hair, leaving it soft and manageable.</p>
          <p>Price: $18.00</p>
        </div>
        )}
        {selectedProduct === 'Growth Complex Salt Free Hair Mask' && (
        <div className="product-details">
          <img src="https://naturespell.co.uk/cdn/shop/files/NS_GrowthComplexSaltFreeHairMask_Haircare_Ingredient.jpg?crop=center&height=2000&v=1720105425&width=2000/300x200" alt="Hair Mask" className="modal-product-image"/>
          <p>The Growth Complex Salt Free Hair Mask nourishes and strengthens hair, promoting growth while being gentle on the scalp with no salt.</p>
          <p>Price: $18.00</p>
        </div>
        )}
        {selectedProduct === 'Herbal Hair Growth Serum' && (
        <div className="product-details">
          <img src="https://naturallyazelia.com/cdn/shop/products/image_e7fb729d-160c-46ac-a13d-c9160f760b55_900x.jpg?v=1670126171/300x200" alt="Hair Serum" className="modal-product-image"/>
          <p>The Herbal Hair Growth Serum stimulates hair growth, strengthens hair follicles, and improves overall scalp health.</p>
          <p>Price: $18.00</p>
        </div>
        )}
        {selectedProduct === 'Detox Dry Shampoo' && (
        <div className="product-details">
          <img src="https://www.usatoday.com/gcdn/presto/2019/09/26/USAT/8c614342-db16-477b-85f8-2bafc931d972-drybar.jpg?crop=2989,2242,x400,y0/300x200" alt="Dry Shampoo" className="modal-product-image"/>
          <p>Detox Dry Shampoo refreshes hair by absorbing excess oil, leaving it clean and volumized without the need for water.</p>
          <p>Price: $18.00</p>
        </div>
        )}
        {selectedProduct === 'Intense Nourishing Leave-In Conditioner' && (
        <div className="product-details">
          <img src="https://themanechoice.com/cdn/shop/products/TMC-H2Oh-Leave-In-Conditioner-Water-Drops_720x.jpg?v=1640112497/300x200" alt="Leave-in Conditioner" className="modal-product-image"/>
          <p>Intense Nourishing Leave-In Conditioner deeply hydrates and nourishes hair, leaving it smooth, soft, and manageable without rinsing.</p>
          <p>Price: $18.00</p>
        </div>
        )}
          
    </div>
  </div>
)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
