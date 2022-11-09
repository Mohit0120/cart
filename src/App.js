// import logo from './logo.svg';
import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Additem from "./components/Additem"

function App() {
  const products = [
    {
      price: 99999,
      name: "I phone",
      quantity: 0,
    },
    {
      price: 9999,
      name: "redmi note 10",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () =>{
    let newProductList = [...productList];
    newProductList.map((products)=>{
      products.quantity = 0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    // console.log(newProductList);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);

  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price:price,
      name: name,
      quantity:0
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
