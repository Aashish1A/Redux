import React from 'react'
import WishlistItem from "../Components/WishlistItem"
import { useSelector } from 'react-redux'

export default function Wishlist() {

  const wishlistItems = useSelector((state) => state.wishList)
  const totalPrice = wishlistItems.reduce((acc, curr)=> acc + curr.price, 0)

  return (
    <div className="cart-container">
      <h2>Items in Your Wishlist</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="total">Total</div>
        </div>
        {wishlistItems.map(({ productId, title, rating, price, imageUrl }) => (
          <WishlistItem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">Total: ${totalPrice}</div>
        </div>
      </div>
    </div>
  )
}