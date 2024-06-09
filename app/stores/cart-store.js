import { create } from "zustand";
import { persist } from "zustand/middleware";
import { editCart, getCart, postCart } from "../util/api";

const useCartStore = create(
    persist(
        (set, get) => ({
            idCart: null,
            productsCartList: [],
            initializeCart: async () => {
                const storedIdCart = localStorage.getItem("cartId");
                if (storedIdCart) {
                    const { cart } = await getCart(storedIdCart);
                    set({ productsCartList: cart.items, idCart: storedIdCart });
                }
            },
            addProd: async ({ _id, quantity }) => {
                const { idCart, productsCartList } = get();
                const data = { quantity, product: _id };
                const prodFinded = productsCartList.find(
                    (prod) => prod.product?._id === _id
                );

                if (prodFinded) {
                    const newCart = productsCartList.map((prod) =>
                        prod.product?._id === data.product
                            ? { ...prod, quantity: prod.quantity + quantity }
                            : prod
                    );

                    try {
                        const { cart } = await editCart(idCart, newCart);
                        set({ productsCartList: cart.items });
                    } catch (error) {
                        console.error("Error al actualizar el carrito:", error);
                    }
                } else {
                    if (!idCart) {
                        try {
                            const { cart } = await postCart([data]);
                            localStorage.setItem("cartId", cart._id);
                            set({
                                idCart: cart._id,
                                productsCartList: cart.items,
                            });
                        } catch (error) {
                            console.error("Error al crear el carrito:", error);
                        }
                    } else {
                        const newCart = [...productsCartList, data];

                        try {
                            const { cart } = await editCart(idCart, newCart);
                            set({ productsCartList: cart.items });
                        } catch (error) {
                            console.error(
                                "Error al actualizar el carrito:",
                                error
                            );
                        }
                    }
                }
            },
            removeProd: async (id) => {
                const { idCart, productsCartList } = get();
                const prodFinded = productsCartList.find(
                    (prod) => prod.product?._id === id
                );

                if (idCart) {
                    if (prodFinded?.quantity > 1) {
                        const newCart = productsCartList.map((prod) =>
                            prod.product._id === id
                                ? {
                                      ...prod,
                                      quantity: prod.quantity - 1,
                                  }
                                : prod
                        );

                        try {
                            const { cart } = await editCart(idCart, newCart);
                            set({ productsCartList: cart.items });
                        } catch (error) {
                            console.error(
                                "Error al actualizar el carrito:",
                                error
                            );
                        }
                    } else {
                        const newCart = productsCartList.filter(
                            (prod) => prod.product?._id !== id
                        );

                        try {
                            const { cart } = await editCart(idCart, newCart);
                            set({ productsCartList: cart.items });
                        } catch (error) {
                            console.error(
                                "Error al actualizar el carrito:",
                                error
                            );
                        }
                    }
                }
            },
            resetCart: () => {
                set({ idCart: null, productsCartList: [] });
                localStorage.removeItem("cartId");
            },
        }),
        {
            name: "cart-storage",
        }
    )
);

export { useCartStore };
