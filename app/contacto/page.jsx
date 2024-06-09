"use client";
import { useForm } from "react-hook-form";
import { postMessage } from "../util/api";
import { Toaster, toast } from "sonner";

const Contacto = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        postMessage(data)
            .then((data) => {
                console.log(data);
                reset();
                toast.success("Mensaje enviado correctamente");
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
                style={{ backgroundImage: `url("bg-contacto.png")` }}
                className="h-40 w-full bg-cover bg-center"
            >
                <h3 className="text-[#c78f02] font-bold text-2xl h-full flex justify-center items-center">
                    Contacto
                </h3>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="m-auto w-11/12 max-w-96 my-6"
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
                        <span className="px-2">Email (*)</span>
                    </legend>
                    <input
                        {...register("email", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.email && (
                    <span className="text-red-500">Complete el Email</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Asunto (*)</span>
                    </legend>
                    <input
                        {...register("subject", { required: true })}
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none"
                    />
                </fieldset>
                {errors.subject && (
                    <span className="text-red-500">Complete el Asunto</span>
                )}
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Comentario (*)</span>
                    </legend>
                    <textarea
                        cols="30"
                        rows="10"
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none w-11/12 m-auto resize-none"
                        {...register("body", { required: true })}
                    ></textarea>
                </fieldset>
                {errors.body && (
                    <span className="text-red-500">Complete el Comentario</span>
                )}
                <div className="text-center">
                    <button
                        type="submit"
                        className="py-2 px-4 my-6 border border-[#b98503] rounded shadow-md bg-[#e7d6ac] hover:bg-[#f3ead5] text-[#b98503]"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contacto;
