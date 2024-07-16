"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Footer } from "flowbite-react";

function Pie() {
  return (
    <Footer container className="bg-[#f5dcc6]">
      <Footer.Copyright href="#" by="AGP Lingerie ™" year={2024} />
      <Footer.LinkGroup className="mt-[20px]">
        <Footer.Link href="https://wa.me/573213843108" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </Footer.Link>
        <Footer.Link href="https://www.instagram.com/agp_ladylingerie?utm_source=qr&igsh=YXJiOWFyMm9xNnFx " target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Footer.Link>
        <Footer.Link href="https://web.facebook.com/agpladylingire" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
export default Pie;