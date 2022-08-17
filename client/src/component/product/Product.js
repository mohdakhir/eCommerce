import React from "react";
import "./Product.css";
import { useState } from "react";

const Product = () => {
  const [data, setData] = useState({
    name: "",
    imageURL: "",
    price: "",
    description: "",
  });
  const submitCategory = async (e) => {
    e.preventDefault();
    const { name, imageURL, price, description } = data;
    const res = await fetch("/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        imageURL,
        price,
        description,
      }),
    });

    const result = await res.json();
    if (result.success === true) {
      window.alert("New Product Added successfully !!!");
      return;
    }
  };
  return (
    <div className="category">
      <h2>Add new Product</h2>
      <div className="text">
        <div className="inputField">
          <span>Category Name</span>
          <input
            type="text"
            name=""
            required="required"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="inputField">
          <span>imageURL</span>
          <input
            type="text"
            name=""
            required="required"
            onChange={(e) => setData({ ...data, imageURL: e.target.value })}
          />
        </div>
        <div className="inputField">
          <span>price</span>
          <input
            type="text"
            name=""
            required="required"
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div className="inputField">
          <span>Description</span>
          <input
            type="text"
            name=""
            required="required"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div className="buttonSend" onClick={(e) => submitCategory(e)}>
          <input type="submit" name="" value="Submit" className="button" />
        </div>
      </div>
    </div>
  );
};

export default Product;
