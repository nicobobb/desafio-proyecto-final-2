"use client";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { HiShoppingCart } from "react-icons/hi";
import Image from "next/image";
import { useCartStore } from "../stores/cart-store"; // Adjust the import path as necessary
import { useEffect } from "react";

const CardModal = () => {
    const { productsCartList, initializeCart, resetCart } = useCartStore();

    useEffect(() => {
        initializeCart();
    }, [initializeCart]);

    const totalQuantity = productsCartList.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    return (
        <Dialog>
            <DialogTrigger>
                <div className="relative">
                    <HiShoppingCart className="text-3xl" />
                    {totalQuantity > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {totalQuantity}
                        </span>
                    )}
                </div>
            </DialogTrigger>
            <DialogContent className="bg-[#ffefc9]">
                <DialogHeader>
                    <DialogTitle className="py-2 text-center text-[#c8902c]">
                        Carrito
                    </DialogTitle>

                    <div>
                        {productsCartList.length > 0 ? (
                            <div>
                                {productsCartList.map((item) => (
                                    <div
                                        key={item.product._id}
                                        className="flex items-center py-2 border-b border-gray-200"
                                    >
                                        <Image
                                            src={item.product.imgUrl}
                                            alt={item.product.shortDesc}
                                            width={50}
                                            height={50}
                                            className="object-cover object-center"
                                        />
                                        <div className="ml-4">
                                            <p className="font-semibold">
                                                {item.product.name}
                                            </p>
                                            <p>Cantidad: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="mt-4 text-gray-500">
                                No hay productos en el carrito.
                            </p>
                        )}
                    </div>

                    <div className="text-center mt-4">
                        {totalQuantity > 0 && (
                            <button
                                onClick={resetCart}
                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                            >
                                Vaciar Carrito
                            </button>
                        )}
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CardModal;
