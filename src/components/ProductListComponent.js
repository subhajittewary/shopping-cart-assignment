import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../actions.js";
import { CartComponent } from "./CartComponent.js";
import { Table } from "../common/Table.js";
import ProductDetailsComponent from "./ProductDetailsComponent.js";
import { productListheadings } from "../data/constants.js";
import mockData from "../data/mock.js";

export default function ProductListComponent() {
  const productList = useSelector((state) => {
    return state.productList.productList.products;
  });

  const cartItems = useSelector((state) => state.addToCart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProductList(dispatch, mockData);
  }, [dispatch]);

  function renderRow(product) {
    return (
      <ProductDetailsComponent
        product={product}
        key={product.id}
        cartItems={cartItems}
      />
    );
  }

  return (
    <>
      <CartComponent cartItems={cartItems} />
      <Table headings={productListheadings} list={productList} renderRow={renderRow} />
    </>
  );
}
