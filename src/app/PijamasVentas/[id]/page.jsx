"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import list from "../../../../public/data";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function getProduct(id) {
  const productId = Number(id); // Asegúrate de convertir el ID a número si es necesario
  return list.find((item) => item.id === productId);
}

const ProductPage = ({ params }) => {
  const product = getProduct(params.id);

  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    if (product) {
      const productLink = window.location.href;
      const message = encodeURIComponent(`Hola, estoy interesado en este producto: ${productLink}`);
      const whatsappUrl = `https://wa.me/573228662072?text=${message}`;
      setWhatsappLink(whatsappUrl);
    }
  }, [product]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

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
    <div className="mt-5 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2 mx-auto md:mb-[100px] lg:ml-[280px]" style={{ width: '100%', height: '500px', maxWidth: '500px' }}>
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
      <div className="col-span-1 px-5 mt-8 md:mt-0 ">
        <h1 className="antialiased font-bold text-xl">{product.title}</h1>
        <p className="text-lg mb-5">${product.price}</p>
        <p>Tallas disponibles:</p>
        <p>S, M, L</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center justify-center bg-green-500 text-white rounded-full py-2 px-4 hover:bg-green-600 transition-colors duration-300 mt-3 mb-3">
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
            Ir a Whatsapp
          </button>
        </a>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductPage;