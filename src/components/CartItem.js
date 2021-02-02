import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_GEO_AU_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553706422"></img>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>Apple iPad Pro</h2>
                </div>
                <div className="info-stock">
                    In Stock
                </div>
                <div className="item-actions">
                    <div className="item-quantity">

                    </div>
                    <div className="item-delete">
                        Delete
                    </div>
                </div>
            </div>
            <div className="CartItem-price">
                $769.00
            </div>
            
        </div>
    )
}

export default CartItem
