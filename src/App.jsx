// App.jsx
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import Alert from "./Components/Alert";
import CartModal from "./Components/CartModal";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("info");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    if (isProductInCart) {
      setAlertMessage("⚠️ Item are already in the cart!");
      setAlertType("warning");
    } else {
      setCartItems([...cartItems, product]);
      setAlertMessage("Item added ✅");
      setAlertType("success");
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); 
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    setAlertMessage("Item removed ❌");
    setAlertType("error");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); 
  };
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <NavBar cartCount={cartItems.length} onCartClick={openCart} />
      {showAlert && <Alert message={alertMessage} type={alertType} />}
      <ProductList addToCart={addToCart} />
      <CartModal
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
