function Card({ id, name, img, category, brand, shortDesc, delivery }) {
    return (
        <div className="p-4 bg-[#ffefc9] rounded-md">
            <div className="w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
                <img
                    src={img}
                    alt={shortDesc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>

            <div className="text-center">
                <h2 className="text-[#e94587] font-semibold pt-4">{name}</h2>
                <p>({brand})</p>
                <b className="pt-3">{category}</b>
                <p className="pt-3">{shortDesc}</p>
                {delivery ? (
                    <p className="pt-3 text-gray-500">Envío sin cargo.</p>
                ) : (
                    <p className="pt-3 text-gray-500">Envío con cargo </p>
                )}
                <button className="flex items-center justify-center rounded-md py-2 px-4 mt-3 mx-auto bg-[#e94587] text-white">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default Card;
