import Cart from "./Cart";

function Header({ 
  cart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  isEmptyCart,
  totalPrice
}) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>

          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            clearCart={clearCart}
            isEmptyCart={isEmptyCart}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </header>
  )
}

export default Header;
