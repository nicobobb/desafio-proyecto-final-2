import Image from "next/image";
import { useCartStore } from "../stores/cart-store";
import { Toaster, toast } from "sonner";

function Card({ _id, name, imgUrl, category, brand, shortDesc, delivery }) {
    const { addProd } = useCartStore();

    const handleAddToCart = () => {
        console.log(_id);
        addProd({ _id: _id, quantity: 1 });
        toast.success("Producto agregado al Carrito");
    };

    return (
        <div className="p-4 bg-[#ffefc9] rounded-md">
            <Toaster richColors />
            <div className="w-full overflow-hidden rounded-md group-hover:opacity-75">
                <Image
                    src={imgUrl}
                    alt={shortDesc}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[100%] h-auto object-cover object-center"
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
                <button
                    className="flex items-center justify-center rounded-md py-2 px-4 mt-3 mx-auto bg-[#e94587] text-white"
                    onClick={handleAddToCart}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default Card;
