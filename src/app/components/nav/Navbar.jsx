"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import "../../globals.css"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Función para cerrar el menú si se hace clic fuera de él
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Agregar el evento al hacer clic
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#f5dcc6] p-4">
      <div className="container mx-auto flex items-center justify-center">
        {/* Contenido visible en pantallas grandes */}
        <div className="hidden lg:flex items-center">
          <div className="ml-20">
            <Link href="/">
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
              className="text-3xl md:text-xl text-[#295662] ml-40 font-zilla-slab"
              prefetch={false}
            >
              Pijamas
            </Link>
            <Link
              href="/lenceria"
              className="text-xl md:text-lg text-[#295662] ml-40 font-zilla-slab"
              prefetch={false}
            >
              Lencería
            </Link>
          </div>
        </div>

        {/* Botón de menú para dispositivos móviles */}
        <div className="lg:hidden flex items-center mr-12" ref={menuRef}>
          <button
            type="button"
            className="rounded-md bg-[#f5dcc6] text-[#295662] p-2 text-base font-normal transition-colors hover:bg-white-200 focus:outline-none focus:ring-2 focus:ring-[#295662] dark:bg-[#295662] dark:text-gray-50 dark:hover:bg-[#295662] dark:focus:ring-[#295662] h-8 w-8 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="w-6 h-6" />
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
              className="w-24 h-24 lg:w-32 lg:h-32 ml-10"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
