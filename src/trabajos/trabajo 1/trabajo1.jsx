import "./trabajo1.css"

export function Trabajo1() {
    return (
        <>
            <div className="centrador-publicidad">
                <div className="titulo-publicidad">
                    <h1 id="titulo-publicidad">El origen de la publicidad</h1>
                </div>
            </div>
            <div className="centrador-publicidad">
                <div className="publicidad-contenedor">
                    <h1> Introduccion </h1>
                    <h3>
                        El largo recorrido de la publicidad se ha mirado demasiadas veces de forma superficial. La suya
                        no es sólo una historia de anuncios, sino de personas y empresas o, mejor dicho, de acciones
                        emprendidas por personas que buscaban disponer de una forma de comunicación que sirviera
                        para dar a conocer lo que ofrecían a su comunidad y, si fuera necesario, para persuadir sobre ello.
                        <br />
                        Su contexto principal es el mercado, que siempre parece fagocitar todo lo que está en él,
                        traduciéndolo a cifras y dinero, pero esta actividad, como otras especialmente unidas al consumo,
                        puede observarse desde miradas muy distintas. Nuestro punto de vista es que la publicidad está
                        unida a la historia, está presente como resultado de la evolución económica, comercial, técnica y
                        financiera e, inevitablemente, a lo que va ocurriendo en lo social, ideológico y cultural.
                    </h3>
                </div>
            </div>
            <div className="contenedor-organizador">
                <div className="organizador-publicidad">

                    <div className="cuadro-pequeño">
                        <h1 style={{ margin: "10px" }}>¿Cuándo comienza la publicidad?</h1>
                        <h3 style={{ margin: "10px" }}>
                            •El deseo de
                            persuadir ha estado presente desde siempre en la Humanidad, lo único que ha ido cambiando en
                            cada época son los medios a nuestro alcance. Según esta concepción, la búsqueda de los
                            primeros vestigios publicitarios nos lleva al comienzo de las civilizaciones. El obelisco de Luxor y
                            el papiro de Tebas. Grecia y Roma ofrecen otros soportes
                            más populares.
                        </h3>
                    </div>

                    <div className="cuadros-pequeños">
                        <div className="cuadro">
                            <img src="/obelisco.jpg" alt="" />
                            <h3>Obelisco de Luxor </h3>
                        </div>
                        <div className="cuadro">
                            <img src="/papiro.webp" alt="" />
                            <h3>Papiro de Tebas </h3>
                        </div>
                    </div>


                </div>
            </div>
            <div className="centrador-publicidad">
                <div className="publicidad-contenedor">
                    <h1> ¿Como definir la publicidad? </h1>
                    <h3>
                        La publicidad es una estrategia de comunicación utilizada por empresas y organizaciones para promocionar productos, servicios o ideas a través de diversos medios. Su objetivo es atraer la atención del público, crear interés, y persuadir a la audiencia para que tome una acción específica, como realizar una compra o apoyar una causa.
                    </h3>
                </div>
            </div>
        </>
    )
}