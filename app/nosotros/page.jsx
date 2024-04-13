import Image from "next/image";

const Nosotros = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url("bg-nosotros.jpg")` }}
                className="h-96 w-full bg-cover bg-center"
            >
                <h3 className="text-[#c78f02] font-bold text-2xl h-full flex justify-center items-center">
                    Nosotros
                </h3>
            </div>
            <section className="w-11/12 m-auto">
                <div className="flex flex-row justify-around items-center flex-wrap max-w-[840px] bg-[#ffefc9] rounded py-4 my-3 mx-auto">
                    <div className="w-60 m-auto p-2.5">
                        <p>
                            Bienvenido a Toys, tu destino de confianza para
                            juguetes asequibles y de alta calidad en Bahía
                            Blanca.
                        </p>
                        <p>
                            Ubicados en la calle Sarmiento 1200, somos una
                            empresa familiar con décadas de experiencia dedicada
                            a la alegría y felicidad de los niños y niñas.
                        </p>
                    </div>

                    <Image
                        src="/aboutus1.jpg"
                        alt="Foto de la juguetería de frente"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-60 rounded-2xl m-auto p-2.5"
                    />
                </div>
                <div className="flex flex-row justify-around items-center flex-wrap max-w-[840px] bg-[#ffefc9] rounded py-4 my-3 mx-auto">
                    <div className="w-60 m-auto p-2.5 sm:order-2">
                        <p>
                            En Toys, entendemos la importancia de brindar a los
                            más pequeños momentos llenos de diversión,
                            creatividad y aprendizaje.
                        </p>
                        <p>
                            Nuestra misión es proporcionar juguetes emocionantes
                            y educativos para todas las edades a precios
                            accesibles, sin comprometer la calidad.
                        </p>
                    </div>

                    <Image
                        src="/aboutus2.jpg"
                        alt="Ejemplo de juguete con distintos colores"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-60 rounded-2xl m-auto p-2.5 "
                    />
                </div>
            </section>
            <section className="bg-[#f4a0c2] w-full py-5 text-center ">
                <div className="max-w-[830px] m-auto px-5 text-[#ffffff]">
                    <p className="text-2xl">
                        Nos enorgullece ofrecer una amplia selección de
                        productos que estimulan la imaginación y fomentan el
                        desarrollo infantil.
                    </p>
                    <p className="text-2xl">
                        Desde juguetes clásicos hasta las últimas novedades, en
                        Toys encontrarás opciones para cada etapa de
                        crecimiento.
                    </p>
                </div>
            </section>

            <section className="w-90 nosotros__container">
                <div className="flex flex-row justify-around items-center flex-wrap max-w-[840px] bg-[#ffefc9] rounded py-4 my-3 mx-auto">
                    <div className="w-60 m-auto p-2.5">
                        <p>
                            Lo que nos distingue es nuestro compromiso con la
                            satisfacción del cliente.
                        </p>
                        <p>
                            Cada juguete que ofrecemos ha sido cuidadosamente
                            seleccionado para garantizar la seguridad y
                            durabilidad, brindando a los padres la tranquilidad
                            de saber que están invirtiendo en la diversión y el
                            desarrollo saludable de sus hijos.
                        </p>
                    </div>

                    <Image
                        src="/aboutus3.jpg"
                        alt="Foto de la juguetería por dentro"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-60 rounded-2xl m-auto p-2.5 "
                    />
                </div>
                <div className="flex flex-row justify-around items-center flex-wrap max-w-[840px] bg-[#ffefc9] rounded py-4 my-3 mx-auto">
                    <div className="w-60 m-auto p-2.5 sm:order-2">
                        <p>
                            Gracias por ser parte de la familia Toys. Estamos
                            aquí para ser tu compañero confiable en la creación
                            de recuerdos inolvidables para tus seres queridos.
                        </p>
                        <p>
                            ¡Ven y descubre el mundo de Toys, donde la alegría y
                            la calidad van de la mano!
                        </p>
                        <h3>¡Esperamos verte pronto!</h3>
                    </div>

                    <Image
                        src="/aboutus4.jpg"
                        alt="Inaguración de la juguetería"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-60 rounded-2xl m-auto p-2.5 "
                    />
                </div>
            </section>
        </>
    );
};

export default Nosotros;
