
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
                Con los tags que ves a los lados puedes desplazarte entre los distintos trabajos.
                <br />
                ¡Explora!
              </h2>
              <div className="imagen-bienvenida">
                <img src={comunicacion} alt="" id="capigames" />
              </div>
            </div>
            <div className="recomen-2">

              <div className="recomenjuegos4">
                <div className="juegocreador separador" id="juegocreador2">
                  <Link className="linkjuegosinicio1" to={"/trabajos/1"}>
                    <h2>Origen de la publicidad</h2>
                  </Link>
                </div>
                <div className="juegocreador separador" id="juegocreador2">
                  <Link className="linkjuegosinicio1" to={"/trabajos/2"}>
                    <h2>El debate publicitario</h2>
                  </Link>
                </div>
                <div className="juegocreador separador" id="juegocreador3">
                  <Link className="linkjuegosinicio1" to={"/trabajos/3"}>
                    <h2>Logotipos</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className="recomen">

              <div className="recomenjuegos4">
                <div className="juegocreador separador" id="juegocreador2">
                  <Link className="linkjuegosinicio1" to={"/trabajos/4"}>
                    <h2>La Gig economy</h2>
                  </Link>
                </div>
                <div className="juegocreador separador" id="juegocreador2">
                  <Link className="linkjuegosinicio1" to={"/trabajos/5"}>
                    <h2>El consumo y bienestar</h2>
                  </Link>
                </div>
                <div className="juegocreador separador" id="juegocreador3">
                  <Link className="linkjuegosinicio1" to={"/trabajos/6"}>
                    <h2>Piramide de Maslow</h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
