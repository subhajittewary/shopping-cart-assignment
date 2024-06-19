import { useDispatch } from "react-redux";
import { handleAddToCart } from "../utils";

export default function ProductDetailsComponent({ product, cartItems }) {
  
  const dispatch = useDispatch();
  
  return (
    <tr key={product.id}>
      <td>{product.title}</td>
      <td>{product.stock}</td>
      <td>$ {product.price}</td>
      <td>
        <img src={product.images[0]} alt={product.title} />
      </td>
      <td>
        <button onClick={() =>handleAddToCart(product,cartItems, dispatch)}>Add to cart</button>
      </td>
    </tr>
  );
}
