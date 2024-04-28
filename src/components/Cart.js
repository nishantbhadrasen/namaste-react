import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  /* Be careful whatparts are you extracting.

    DO NOT SUBSCRIBE TO THE WHOLE STORE IT WILL REDUCE THE PERFORMANCE*/
  const cartItems = useSelector((store) => store.cart.items) || [];
  console.log(cartItems);

  const disptach = useDispatch();
  const handleClearCart = () => {
    disptach(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black rounded-lg text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1> Cart is empty add Items to the carts!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
