import { useEffect, useState } from "react";

const useTotalHook = (cartItems) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const calculateTotal = (items) =>
        items?.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

      setTotal(calculateTotal(cartItems));
    } else {
      setTotal(0);
    }
  }, [cartItems]);

  return total.toFixed(2);
};

export default useTotalHook;
