import React from "react";
import "./Category.css";
import { useState } from "react";

const Category = () => {
  const [data, setData] = useState({
    categoryName: "",
    description: "",
    imageUrl: "",
  });
  const submitCategory = async (e) => {
    e.preventDefault();
    const { categoryName, description, imageUrl } = data;
    const res = await fetch("/catgory/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryName,
        description,
        imageUrl,
      }),
    });

    const result = await res.json();
    if (result.success === true) {
      window.alert("Category Added successfully !!!");
      return;
    } 
  };
  return (
    <div className="category">
      <h2>Add new Category</h2>
      <div className="AddNewProduct">
        <a href="/addProduct">
        <button>Add new Product</button>
        </a>
      </div>
      <div className="text">
        <div className="inputField">
          <span>Category Name</span>
          <input
            type="text"
            name=""
            required="required"
            onChange={(e) => setData({ ...data, categoryName: e.target.value })}
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
        <div className="inputField">
          <span>ImageUrl</span>
          <input
            type="text"
            name=""
            required="required"
            onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
          />
        </div>
        <div className="buttonSend" onClick={(e) => submitCategory(e)}>
          <input type="submit" name="" value="Submit" className="button" />
        </div>
      </div>
    </div>
  );
};

export default Category;
