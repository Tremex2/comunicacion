
import { Link } from "react-router-dom";
import "./bienvenida.css";
import comunicacion from "../../imagenes/comunicacion.jpg"
export function Bienvenida() {
  return (
    <>
      <div className="block">
        <div className="div-father">
          <div className="div-padre">
            <div className="bienvenida-titulo">
              <h1>¡Bienvenido a nuestra pagina web!</h1>
              <h2>
                Con los tags que ves a los lados puedes desplazarte en nuestro
                catálogo.
                <br />
                ¡Explora!
              </h2>
              <div className="imagen-bienvenida">
                <img src={comunicacion} alt="" id="capigames" />
              </div>
            </div>
            <div className="recomen">

              <div className="recomenjuegos4">
                <div className="juegocreador" id="juegocreador2">
                  <Link className="linkjuegosinicio1" to={"/trabajos/1"}>
                    <h2>trabajo 1</h2>
                  </Link>
                </div>
                <div className="juegocreador" id="juegocreador2">
                  <Link className="linkjuegosinicio1" to={"/corto/4/oneshot"}>
                    <h2>trabajo 2</h2>
                  </Link>
                </div>
                <div className="juegocreador" id="juegocreador3">
                  <Link className="linkjuegosinicio1" to={"/2D/1/hollow-knight"}>
                    <h2>trabajo 3</h2>
                  </Link>
                </div>
                <div className="juegocreador" id="juegocreador4">
                  <Link
                    className="linkjuegosinicio1"
                    to={"/primera-persona/1/bioshock"}
                  >
                    <h2>trabajo 4</h2>
                  </Link>
                </div>
                <div className="juegocreador" id="juegocreador5">
                  <Link
                    className="linkjuegosinicio1"
                    to={"/primera-persona/1/subnautica"}
                  >
                    <h2>trabajo 5</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="los-mas-descargados">
              <div className="juegocreador" id="los-mas-descargados-1">
                <Link
                  className="linkjuegosinicio1"
                  to={"/primera-persona/4/metro-last-night"}
                >
                  <h2>trabajo 6</h2>
                </Link>
              </div>
              <div className="juegocreador" id="los-mas-descargados-2">
                <Link
                  className="linkjuegosinicio1"
                  to={"/accion/1/cyberpunk-2077"}
                >
                  <h2>trabajo 8</h2>
                </Link>
              </div>
              <div className="juegocreador" id="los-mas-descargados-3">
                <Link
                  className="linkjuegosinicio1"
                  to={"/accion/4/ghost-of-tushima"}
                >
                  <h2>trabajo 9</h2>
                </Link>
              </div>
              <div className="juegocreador" id="los-mas-descargados-4">
                <Link className="linkjuegosinicio1" to={"/terror/1/phasmophobia"}>
                  <h2>trabajo 10</h2>
                </Link>
              </div>
              <div className="juegocreador" id="los-mas-descargados-5">
                <Link className="linkjuegosinicio1" to={"/accion/4/god-of-war-2018"}>
                  <h2>trabajo 11</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
