import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image">
                <img src="https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/DIPP12WSG2_.jpg"></img>
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
                        <select>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                        </select>
                    </div>
                    <div className="item-actions-divider">|</div>
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
