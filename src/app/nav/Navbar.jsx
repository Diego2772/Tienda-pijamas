"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <header className="bg-[#f5dcc6] p-4">
  <div className="container mx-auto flex items-center justify-center">
    {/* Contenido visible en pantallas grandes */}
    <div className="hidden lg:flex items-center">
      <div className="ml-20">
      <Link href="/" >
        <img
          src="/images/LOGO.AGP.jpg"
          alt="AGP Lady Lingerie Logo"
          className="w-24 h-24 lg:w-32 lg:h-32"
        />
      </Link>
      </div>
      <div className="flex ml-60">
        <Link
          href="/pijamas"
          className="text-base font-normal md:text-lg text-[#295662] ml-40"
          prefetch={false}
        >
          Pijamas
        </Link>
        <Link
          href="/lenceria"
          className="text-base font-normal md:text-lg text-[#295662] ml-40"
          prefetch={false}
        >
          Lenceria
        </Link>
      </div>
    </div>

    {/* Botón de menú para dispositivos móviles */}
    <div className="lg:hidden">
      <button
        type="button"
        className="rounded-md bg-[#f5dcc6] text-[#295662] p-2 text-base font-normal transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Toggle menu</span>
      </button>
      {/* Contenido desplegable para dispositivos móviles */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 z-50 bg-white shadow-lg dark:bg-gray-950">
          <nav className="flex flex-col">
            <Link
              href="/pijamas"
              className="flex items-center gap-2 px-4 py-3 text-base font-normal text-[#295662] hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
              prefetch={false}
            >
              Pijamas
            </Link>
            <Link
              href="/lenceria"
              className="flex items-center gap-2 px-4 py-3 text-base font-normal text-[#295662] hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
              prefetch={false}
            >
              Lenceria
            </Link>
          </nav>
        </div>
      )}
      <Link href="/" className="ml-0">
        <img
          src="/images/LOGO.AGP.jpg"
          alt="AGP Lady Lingerie Logo"
          className="w-24 h-24 lg:w-32 lg:h-32"
        />
      </Link>
    </div>
  </div>
</header>

  );
}

export default Navbar;
