import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <>
      <div className="orderSummary">
        <h4>Order Summary</h4>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="orderItem">
              <img src={item.image01} alt={item.title} className="orderItemImage" />
              <div className="orderItemDetails">
                <span className="orderItemTitle">{item.title}</span>
                <span>{item.quantity} x ${item.price}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="totalAmount">
          <strong>Total Amount: ${totalAmount.toFixed(2)}</strong>
        </div>
        <div className="buttonContainer">
          <button className="button">Send Order Request</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
