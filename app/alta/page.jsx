"use client";
import { useForm } from "react-hook-form";
import { postProducts } from "../util/api";
import { Toaster, toast } from "sonner";

const Alta = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();

        // Añadir cada campo del formulario a FormData
        for (const key in data) {
            if (key === "image" && data[key].length > 0) {
                formData.append(key, data[key][0]);
            } else {
                formData.append(key, data[key]);
            }
        }

        postProducts(formData)
            .then((data) => {
                console.log(data);
                reset();
                toast.success("Producto dado de alta CORRECTAMENTE");
            })
            .catch((err) => {
                console.error(err);
                toast.error("ERROR al enviar");
            });
    };

    return (
        <div>
            <Toaster richColors />
            <div
                style={{ backgroundImage: `url("bg-alta.jpg")` }}
                className="h-40 w-full bg-cover bg-center"
            >
                <h3 className="text-[#c78f02] font-bold text-2xl h-full flex justify-center items-center">
                    Alta
                </h3>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="m-auto w-11/12 max-w-96 my-6"
                enctype="multipart/form-data"
            >
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Nombre (*)</span>
                    </legend>
                    <input
                        {...register("name", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.name && (
                    <span className="text-red-500">Complete el Nombre</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Precio (*)</span>
                    </legend>
                    <input
                        {...register("price", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.price && (
                    <span className="text-red-500">Completa el precio</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Stock (*)</span>
                    </legend>
                    <input
                        {...register("stock", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.stock && (
                    <span className="text-red-500">Complete el Stock</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Marca (*)</span>
                    </legend>
                    <input
                        {...register("brand", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.brand && (
                    <span className="text-red-500">Complete la Marca</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Categoría (*)</span>
                    </legend>
                    <input
                        {...register("category", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.category && (
                    <span className="text-red-500">Complete la Categoría</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Descripción corta (*)</span>
                    </legend>
                    <input
                        {...register("shortDesc", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.shortDesc && (
                    <span className="text-red-500">
                        Complete la descripción corta
                    </span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Descripción larga (*)</span>
                    </legend>
                    <input
                        {...register("longDesc", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.longDesc && (
                    <span className="text-red-500">
                        Complete la descripción larga
                    </span>
                )}
                <fieldset className="my-4 pt-px pl-2  ">
                    <input
                        type="checkbox"
                        {...register("delivery")}
                        className="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-[#b98503] checked:appearance-auto bg-[#fffbf2] focus:outline-none"
                    />
                    <span className="px-2 text-[#c78f02]">
                        Envío sin cargo (*)
                    </span>
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Edad desde (*)</span>
                    </legend>
                    <input
                        {...register("ageFrom", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.ageFrom && (
                    <span className="text-red-500">Complete el campo</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Edad hasta (*)</span>
                    </legend>
                    <input
                        {...register("ageTo", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.ageTo && (
                    <span className="text-red-500">Complete el campo</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Foto</span>
                    </legend>
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="py-1 file:rounded-sm rounded-sm bg-[#fffbf2] focus:outline-none block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:font-semibold file:bg-[#f3ead5] file:text-[#c78f02] hover:file:bg-[#e7d6ac]"
                    />
                </fieldset>
                {errors.image && (
                    <span className="text-red-500">
                        Por favor suba una imagen
                    </span>
                )}
                <div className="text-center">
                    <button
                        type="submit"
                        className="py-2 px-4 border border-[#b98503] rounded shadow-md bg-[#e7d6ac] hover:bg-[#f3ead5] text-[#b98503]"
                    >
                        Cargar producto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Alta;
