import { useDispatch } from "react-redux";
import { handleAddToCart, handleRemoveFromCart } from "../utils";

export default function CartDetailsComponent({ product, cartItems }) {
  const dispatch = useDispatch();
  return (
    <tr key={product.id}>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>${product.price}</td>
      <td>
        <img src={product?.images[0] || ""} alt={product?.title} />
      </td>
      <td>
        <button onClick={() => handleAddToCart(product, cartItems, dispatch)}>Add to Cart</button>
      </td>
      <td>
        <button onClick={() => handleRemoveFromCart(product, cartItems, dispatch)}>Remove from Cart</button>
      </td>
    </tr>
  );
}
