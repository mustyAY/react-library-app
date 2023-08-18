import React from "react";

const Cart = ({ cart, changeQuantity }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((clickedBook) => {
                  return (
                    <div className="cart__item" key={clickedBook.id}>
                      <div className="cart__book">
                        <img
                          src={clickedBook.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {clickedBook.title}
                          </span>
                          <span className="cart__book--price">${(clickedBook.salePrice || clickedBook.originalPrice).toFixed(2)}</span>
                          <button className="cart__book--remove">Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          className="cart__input"
                          type="number"
                          min={0}
                          max={99}
                          value={clickedBook.quantity}
                          onChange={event => changeQuantity(clickedBook, event.target.value)}
                        />
                      </div>
                      <div className="cart__total">${(clickedBook.salePrice || clickedBook.originalPrice).toFixed(2)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>$1.00</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>$10.00</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() => alert(`Function hasn't been implemented yet :(`)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
