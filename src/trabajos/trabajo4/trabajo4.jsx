import "./trabajo4.css"

export function Trabajo4() {
    return (
        <>
            <div className="centrador-publicidad">
                <div className="titulo-publicidad">
                    <h1 id="titulo-publicidad">La Gig economy</h1>
                </div>
            </div>
            <div className="centrador-publicidad">
                <div className="publicidad-contenedor">
                    <h1> Introduccion </h1>
                    <h3>
                        La gig economy se refiere a un modelo económico y laboral basado en trabajos temporales, flexibles o independientes, en lugar de empleos tradicionales a tiempo completo. En este modelo, las personas (conocidas como trabajadores por encargo o "freelancers") realizan tareas específicas o proyectos para diferentes empresas o clientes, a menudo a través de plataformas digitales.
                    </h3>
                </div>
            </div>
            <div className="contenedor-organizador">
                <div className="organizador-debate">

                    <div className="cuadro-pequeño-debate">
                        <h1 style={{ margin: "10px" }}>Ventajas:</h1>
                        <h2 style={{ margin: "10px" }}>
                            <br />
                            Mayor autonomía para los trabajadores.
                            <br />
                            <br />
                            Oportunidades de ingresos adicionales.
                            <br />
                            <br />
                            Empresas pueden acceder a talento específico sin comprometerse a contratos a largo plazo.
                        </h2>
                    </div>

                    <div className="cuadro-pequeño-debate">
                        <h1 style={{ margin: "10px" }}>Desventajas:</h1>
                        <h2 style={{ margin: "10px" }}>
                            <br />
                            Falta de estabilidad laboral.
                            <br />
                            <br />
                            Poca o ninguna protección social (como seguro médico, vacaciones pagadas, etc.).
                            <br />
                            <br />
                            Competencia global que puede reducir los ingresos.
                        </h2>
                    </div>
                    <div className="cuadro-pequeño-debate-imagenes">
                        <div className="cuadro-publicidad">
                            <div className="imagen-debate">
                                <img src="/uber.jpg" alt="" className="imagen-debate" />
                            </div>
                            <h3>Uber</h3>
                        </div>
                        <div className="cuadro-publicidad">
                            <div className="imagen-debate">
                                <img src="/upwork.jpg" alt="" className="imagen-debate" />
                            </div>
                            <h3>UpWork</h3>
                        </div>
                    </div>
                    <div className="cuadro-pequeño-debate-imagenes">
                        <div className="cuadro-publicidad">
                            <div className="imagen-debate">
                                <img src="/rappi.jpg" alt="" className="imagen-debate" />
                            </div>
                            <h3>Rappi</h3>
                        </div>
                        <div className="cuadro-publicidad">
                            <div className="imagen-debate">
                                <img src="/fiver.jpg" alt="" className="imagen-debate" />
                            </div>
                            <h3>Fiverr</h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className="centrador-publicidad">
                <div className="publicidad-contenedor">
                    <h1> Crecimiento de la Gig economy </h1>
                    <h3>
                        La gig economy está en constante crecimiento y transformación, impulsada principalmente por avances tecnológicos, cambios en las preferencias laborales y la globalización. En los últimos años, su progreso ha sido notable en varias áreas
                    </h3>
                </div>
            </div>

            <div className="centrador-publicidad">
                <div className="publicidad-contenedor">

                    <h1 style={{ textDecoration: "underline" }}>Conclusion</h1>
                    <br />
                    <h3>
                        En conclusión, la gig economy está transformando el panorama laboral global, ofreciendo una alternativa flexible y accesible tanto para trabajadores como para empresas. Su crecimiento constante, impulsado por la tecnología y la necesidad de adaptarse a un mundo más dinámico, refleja su relevancia en la economía moderna. Sin embargo, este modelo plantea retos significativos en términos de estabilidad laboral y derechos de los trabajadores, lo que exige una evolución en las políticas y regulaciones para garantizar un equilibrio justo. A medida que avanza, la gig economy no solo redefine cómo trabajamos, sino también cómo concebimos el empleo en el siglo XXI.
                    </h3>
                </div>
            </div>
        </>
    )
}