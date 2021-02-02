import React from 'react'
import './CartItems.css'

function CartItems() {
    return (
        <div className="CartItems">
          <h1>Shopping Cart</h1>
            <div className="CartItem-image">

            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>title</h2>
                </div>
                <div className="info-stock">

                </div>
                <div className="item-actions">
                    <div className="div.item-quantity">

                    </div>
                    <div className="div.item-delete">

                    </div>
                </div>
                <div className="div.CartItem-price">
                    
                </div>
            </div>
        </div>
    )
}

export default CartItems
