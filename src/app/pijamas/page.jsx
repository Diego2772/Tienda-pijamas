"use client";
import React from "react";
import "../globals.css";
import { useState } from "react";
import list from "../../../public/data";

function App() {
  
  // Estado inicial: un objeto que contiene el estado para cada producto
  const [productMedia, setProductMedia] = useState({});

  // Función para cambiar la imagen principal de un producto al pasar el cursor sobre las miniaturas
  const handleMediaChange = (productId, image) => {
    setProductMedia({ ...productMedia, [productId]: image });
  };

  const handleMouseLeave = (productId) => {
    setProductMedia({ ...productMedia, [productId]: null });
  };

  return (
    <div class="ventas grid grid-cols-4 justify-center ml-100px mt-200px">
      {list.map((item, index) => (
        <div className="product" key={index}>
          <div className="images">
            <div className="preview">
              {/* Imagen principal: utiliza el estado correspondiente al producto actual */}
              <img src={productMedia[index] || item.img} alt="" />
            </div>
            <div className="hover-images">
              {/* Miniaturas */}
              {Object.values(item.productMedia).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  onMouseEnter={() => handleMediaChange(index, image)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  alt=""
                />
              ))}
            </div>
          </div>
          {/* Detalles del producto */}
          <div className="detail">
            <span>{item.tipo}</span>
            <h4 className="product-name">{item.title}</h4>
            <p className="category">{item.category}</p>
            <p className="category">{item.cantidad}</p>
            <p className="price">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;