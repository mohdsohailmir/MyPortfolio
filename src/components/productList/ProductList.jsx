import React from 'react'

import "./productList.css";
import Product from "../product/Product";
import {products} from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. My work..</h1>
        <p className="pl-desc">
          This is a creative portfolio, I have experiences in designing c# applications as well as hands on experience in  digital animation with 
          current industry tools.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) =>(
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
        
        
      </div>
    </div>
  );
};

export default ProductList;