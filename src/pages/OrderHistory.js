import React from 'react';

function OrderHistory() {
  return (
    <div className="order-history-container">
      <h2><i className="fa fa-history"></i>Order History</h2>
      <p>View your past orders here.</p>
      
      {/* Order List */}
      <div className="order-list">
        <h3>Your Orders</h3>
        
        {/* Sample Order Item */}
        <div className="order-item">
          <div className="order-info">Order #1: Laptop</div>
          <div className="order-price">$999.99</div>
        </div>
        
        {/* Another Sample Order Item */}
        <div className="order-item">
          <div className="order-info">Order #2: Smartphone</div>
          <div className="order-price">$599.99</div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;