import { useState, useEffect, useMemo } from "react";

import db from "../mock/db.json";

function useCart() {
  
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [guitars] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MAX_GUITARS_QUANTITY = 5;
  const MIN_GUITARS_QUANTITY = 1;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  function addToCart(item) {
    const itemExists = cart.findIndex(product => product.id === item.id);

    if(itemExists < 0) {
      item.quantity = 1;

      setCart([...cart, item]);

      return;
    }
    
    if(cart[itemExists].quantity >= MAX_GUITARS_QUANTITY) return;

    const updatedCart = [...cart];
    updatedCart[itemExists].quantity++;

    setCart(updatedCart);
  }

  function removeFromCart(itemId) {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  }

  function decreaseQuantity(itemId) {
    const updatedCart = cart.map(item => {
      if (item.id !== itemId || item.quantity <= MIN_GUITARS_QUANTITY) return item;

      return {
        ...item,
        quantity: item.quantity - 1
      }
    });

    setCart(updatedCart);
  }

  function increaseQuantity(itemId) {
    const updatedCart = cart.map(item => {
      if (item.id !== itemId || item.quantity >= MAX_GUITARS_QUANTITY) return item;

      return {
        ...item,
        quantity: item.quantity + 1
      }
    });

    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  const isEmptyCart = useMemo(() => !cart.length, [cart]);

  const totalPrice = useMemo(() => 
    cart.reduce((total, item) => total + (item.quantity * item.price), 0), 
    [cart]
  );

  return {
    guitars,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmptyCart,
    totalPrice
  }
}

export default useCart;
