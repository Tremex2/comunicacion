import { useState, useRef, useEffect } from "react";
import "./menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  const [menuClass, setMenuClass] = useState("izquierda");
  const menuRef = useRef(null);

  function despliegue() {
    setMenuClass((prevClass) =>
      prevClass === "izquierda" ? "derecha" : "izquierda"
    );
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuClass("izquierda");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="boton-menu" onClick={despliegue}>
        <div className="barra1"></div>
        <div className="barra2"></div>
        <div className="barra3"></div>
      </div>
      <div className={menuClass} id="menu" ref={menuRef}>
        <Link className="menu">
          <h2> Menu</h2>
        </Link>
        <div className="linea-recta-menu"></div>
        <Link className="opcion" to={"/"}>
          <h4>Inicio</h4>
        </Link>
        <Link className="opcion" to={"/"}>
          <h4>trabajos disponibles: 6</h4>
        </Link>
        <Link className="opcion" to={"/"}>
          <h4>version: 1.0</h4>
        </Link>
        <Link className="opcion" to={"/"}>
          <h4>Tiempo en desarrollo: 2 semanas y media</h4>
        </Link>
        <Link className="opcion" to={"/"}>
          <h4>Tecnologias: React, JS, html, css y Git</h4>
        </Link>
        <Link className="opcion" to={"/"}>
          <h4>Mas datos proximamente</h4>
        </Link>
        <div className="opcion">
          <h4>Primera version completa</h4>
        </div>
        <div className="opcion">

        </div>
        <div className="opcion">

        </div>
        <div className="linea-recta-cerrar"></div>
        <Link className="boton-menu-cerrar" onClick={despliegue}>
          <h2>Cerrar</h2>
        </Link>
      </div>
    </>
  );
}
