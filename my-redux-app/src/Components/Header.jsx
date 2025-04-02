import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import wishlist from "../assets/wishlist.png";
import { useSelector } from "react-redux";

export default function Header() {
   // Use the correct state key and memoize the selectors
   const cartItems = useSelector((state) => state.cartItems);
   const wishlistItems = useSelector((state) => state.wishList); // Ensure this matches your Redux store key
 
   // Calculate totals
   const totalItems = React.useMemo(
     () => cartItems.reduce((acc, curr) => acc + curr.quantity, 0),
     [cartItems]
   );
 
   const totalWishList = React.useMemo(() => wishlistItems.length, [wishlistItems]);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div style={{display: "flex", gap: "20px"}}>

          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">{totalItems}</div>
          </Link>

          <Link className="cart-icon" to="/wishlist">
            <img style={{ width: "30px" }} src={wishlist} alt="wishlist-icon" />
            <div className="cart-items-count">{totalWishList}</div>
          </Link>

        </div>
      </div>
    </header>
  );
}
