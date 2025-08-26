import "./cart.css";

export const Cart = ({ cart, setCart }) => {
  const onClickMinus = (e) => {
    const getElement = cart.find((each) => each.id === parseInt(e.target.value));
    let updatedCart;
    if (getElement.quantity <= 1) {
      updatedCart = cart.filter((each) => each.id !== getElement.id);
    } else {
      updatedCart = cart.map((each) =>
        each.id === getElement.id
          ? { ...each, quantity: each.quantity - 1 }
          : each
      );
    }
    setCart(updatedCart);
  };

  const onClickAdd = (e) => {
    const getElement = cart.find((each) => each.id === parseInt(e.target.value));
    const updatedCart = cart.map((each) =>
      each.id === getElement.id
        ? { ...each, quantity: each.quantity + 1 }
        : each
    );
    setCart(updatedCart);
  };

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const selected =
      item.quantities?.find((q) => q.id === item.defaultWeightId) || {};
    return sum + (selected.unitPrice || 0) * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 My Cart</h2>

      {/* Desktop Table */}
      <div className="cart-table-wrapper">
        <table className="cart-table">
          <thead className="cart-thead">
            <tr className="cart-row">
              <th>S.No</th>
              <th>Item</th>
              <th>Size</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((each, index) => {
                const selected =
                  each.quantities?.find(
                    (i) => i.id === each.defaultWeightId
                  ) || {};
                return (
                  <tr key={each.id}>
                    <td>{index + 1}</td>
                    <td>{each.name}</td>
                    <td>{each.defaultWeight}</td>
                    <td>₹{selected.unitPrice || 0}</td>
                    <td>
                      <div className="cart-qty-controls">
                        <button
                          className="cart-btn"
                          onClick={onClickMinus}
                          value={each.id}
                        >
                          -
                        </button>
                        <span className="cart-qty">{each.quantity}</span>
                        <button
                          className="cart-btn"
                          onClick={onClickAdd}
                          value={each.id}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>₹{(selected.unitPrice || 0) * each.quantity}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="cart-empty">
                  Your cart is empty 🛍️
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {cart.length > 0 && (
          <div className="cart-total">
            <span>Total Items: {totalItems}</span>
            <span>Total Price: ₹{totalPrice}</span>
          </div>
        )}
      </div>

      {/* Mobile Cards */}
      <div className="cart-mobile">
        {cart.length > 0 ? (
          cart.map((each, index) => {
            const selected =
              each.quantities?.find((i) => i.id === each.defaultWeightId) || {};
            return (
              <div key={each.id} className="cart-card">
                <div className="cart-card-header">
                  <span>{index + 1}. {each.name}</span>
                </div>
                <div className="cart-card-info">
                  <span>Size: {each.defaultWeight}</span>
                  <span>Unit Price: ₹{selected.unitPrice || 0}</span>
                  <span>
                    Total: ₹{(selected.unitPrice || 0) * each.quantity}
                  </span>
                </div>
                <div className="cart-card-quantity">
                  <button
                    className="cart-btn"
                    onClick={onClickMinus}
                    value={each.id}
                  >
                    -
                  </button>
                  <span className="cart-qty">{each.quantity}</span>
                  <button
                    className="cart-btn"
                    onClick={onClickAdd}
                    value={each.id}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="cart-empty">Your cart is empty 🛍️</div>
        )}

        {cart.length > 0 && (
          <div className="cart-total cart-total-mobile">
            <span>Total Items: {totalItems}</span>
            <span>Total Price: ₹{totalPrice}</span>
          </div>
        )}
      </div>
    </div>
  );
};
