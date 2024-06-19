import { Table } from "../common/Table";
import { cartListHeadings } from "../data/constants";
import useTotalHook from "../hooks/useTotalHook";
import CartDetailsComponent from "./CartDetailsComponent";

export function CartComponent({ cartItems }) {
  const total = useTotalHook(cartItems);
  function renderRow(product) {
    return (
      <CartDetailsComponent
        product={product}
        key={product.id}
        cartItems={cartItems}
      />
    );
  }
  function appendRow() {
    if (Number(total)) {
      return (
        <>
          <tr>
            <td colSpan={2}>
              <b>Total</b>
            </td>
            <td colSpan={4}>
              <b>{total}</b>
            </td>
          </tr>
        </>
      );
    } else {
      return null;
    }
  }
  return (
    <>
      <Table
        headings={cartListHeadings}
        list={cartItems}
        renderRow={renderRow}
        appendRow={appendRow}
      />
    </>
  );
}
