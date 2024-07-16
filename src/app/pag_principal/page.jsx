"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import list from "../../../public/lenceria";

function Pag_principal() {
  const [productMedia, setProductMedia] = useState({});
  const router = useRouter();

  const handleMediaChange = (productId, image) => {
    setProductMedia({ ...productMedia, [productId]: image });
  };

  const handleMouseLeave = (productId) => {
    setProductMedia({ ...productMedia, [productId]: null });
  };

  const handleProductClick = (productId) => {
    router.push(`/producto/${productId}`);
  };

  return (
    <div className="items-center justify-center h-full mt-40">
      <div className="flex items-center justify-center w-screen">
      <h1 className="text-center font-zilla-slab text-4xl">PRODUCTOS DESTACADOS</h1>
      </div>
      <div className="flex justify-center">
        <div className="ventas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:ml-10 md:ml-0 lg:mt-20">
          {list.map((item, index) => (
            <div
              className="product"
              key={index}
              onClick={() => handleProductClick(index)}
            >
              <div className="images">
                <div className="preview">
                  <img src={productMedia[index] || item.img} alt="" />
                </div>
                <div className="hover-images">
                  {Object.values(item.productMedia).map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      onMouseEnter={() => handleMediaChange(index, image)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      alt=""
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
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
      </div>
    </div>
  );
}

export default Pag_principal;



