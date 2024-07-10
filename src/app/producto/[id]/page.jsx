"use client";

import React, { useState } from "react";
import list from "../../../../public/lenceria";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Función para obtener un producto por su ID
function getProduct(id) {
  const productId = Number(id); // Asegúrate de convertir el ID a número si es necesario
  return list.find((item) => item.id === productId);
}

// Componente de la página del producto
const ProductPage = ({ params }) => {
  // Obtén el producto usando la función getProduct
  const product = getProduct(params.id);

  // Verifica si el producto no se encontró
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  // Funciones para eventos del carrusel (opcionales)
  const onChange = (index, item) => {
    console.log(`Changed to ${index}`, item);
  };

  const onClickItem = (index, item) => {
    console.log(`Clicked item ${index}`, item);
  };

  const onClickThumb = (index, item) => {
    console.log(`Clicked thumb ${index}`, item);
  };

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2 mx-auto md:mx-0" style={{ width: '100%', height: '500px', maxWidth: '500px' }}>
        <Carousel 
          showArrows={true}
          onChange={onChange}
          onClickItem={onClickItem}
          onClickThumb={onClickThumb}
          autoPlay={true}
          interval={3000}
          dynamicHeight={true}
          showThumbs={true}
          showStatus={false}
          stopOnHover={true}
          infiniteLoop={true}
        >
          <div>
            <img src={product.productMedia.modelo2} alt="Lenceria 1" className="w-full h-30 md:h-full object-contain" />
          </div>
          <div>
            <img src={product.productMedia.modelo3} alt="Lenceria 2" className="w-full h-30 md:h-full object-contain" />
          </div>
          <div>
            <img src={product.productMedia.modelo2} alt="Lenceria 3" className="w-full h-30 md:h-full object-contain" />
          </div>
          <div>
            <img src={product.productMedia.modelo3} alt="Lenceria 4" className="w-full h-30 md:h-full object-contain" />
          </div>
        </Carousel>
      </div>
      {/* detalles */}
      <div className="col-span-1 px-5 mt-8 md:mt-0">
        <h1 className="antialiased font-bold text-xl">{product.title}</h1>
        <p className="text-lg mb-5">${product.price}</p>
        <p>Tallas disponibles:</p>
        <p>S, M, L</p>
        <button className="btn-primary my-5">Ir a Whatsapp</button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductPage;
