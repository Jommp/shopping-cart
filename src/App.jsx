import { useState, useEffect } from "react";

import Header from "./components/Header";
import Guitar from "./components/Guitar";

import db from "./mock/db.json";

function App() {
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

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">
          Nuestra Colección
        </h2>

        <div className="row mt-5">
          {
            guitars.map((guitar) => 
              <Guitar
                key={guitar.id}
                guitar={guitar}
                addToCart={addToCart}
              />
            )
          }
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
