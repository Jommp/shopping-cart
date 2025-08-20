function Cart({
  cart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  isEmptyCart,
  totalPrice
}) {
  return (
    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
      <div className="carrito">
        <img
          className="img-fluid"
          src="/img/carrito.png"
          alt="imagen carrito"
        />

        <div id="carrito" className="bg-white p-3">
          {
            isEmptyCart ?
              (
                <p className="text-center">
                  El carrito esta vacio
                </p>
              ) :
              (
                <>
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        cart.map(item => (
                          <tr key={item.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${item.image}.jpg`}
                                alt="imagen guitarra"
                              />
                            </td>

                            <td>{item.name}</td>

                            <td className="fw-bold">
                              ${item.price}
                            </td>

                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => decreaseQuantity(item.id)}
                              >
                                -
                              </button>

                              {item.quantity}

                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => increaseQuantity(item.id)}
                              >
                                +
                              </button>
                            </td>

                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>

                  <p className="text-end">
                    Total pagar: <span className="fw-bold">${totalPrice}</span>
                  </p>

                  <button
                    className="btn btn-dark w-100 mt-3 p-2"
                    onClick={clearCart}
                  >
                    Vaciar Carrito
                  </button>
                </>
              )
          }
        </div>
      </div>
    </nav>
  );
}

export default Cart;
