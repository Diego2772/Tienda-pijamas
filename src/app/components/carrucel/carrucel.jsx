

'use client'; // Asegura que el componente se renderiza en el cliente

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import "../../globals.css"

const Carrucel = () => {
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
    <div className="carousel-container">
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
          <img src="/imagenes/BOTONES1.jpg" alt="Lenceria 1" />
          
        </div>
        <div>
          <img src="/imagenes/TIRAS1.jpg" alt="Lenceria 2" />
          
        </div>
        <div>
          <img src="/imagenes/CROP2.jpg" alt="Lenceria 3" />

        </div>
      </Carousel>
    </div>
  );
};

export default Carrucel;
