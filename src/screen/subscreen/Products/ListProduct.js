import React from "react";
import { ProductsData } from '../../../ProductData'
import { useNavigate, Outlet } from "react-router-dom";
function ListProducts() {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {ProductsData.map((product) => {
          return (
            <div
              className="productDisplay"
              onClick={() => {
                navigate(`/products/${product.id}/display`);
              }}
            >
              <h1>{product.name}</h1> <p>{product.description}</p>{" "}
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default ListProducts;