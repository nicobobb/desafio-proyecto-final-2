import React from "react";

const Contacto = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url("bg-contacto.png")` }}
                className="h-96 w-full bg-cover bg-center"
            >
                <h3 className="text-[#c78f02] font-bold text-2xl h-full flex justify-center items-center">
                    Contacto
                </h3>
            </div>
            <form className="m-auto w-11/12 max-w-96 my-6">
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Nombre (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Email (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Comentario (*)</span>
                    </legend>
                    <textarea
                        cols="30"
                        rows="10"
                        className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none w-11/12 m-auto resize-none"
                    ></textarea>
                </fieldset>
                <div className="text-center">
                    <button className="py-2 px-4 border border-[#b98503] rounded shadow-md bg-[#e7d6ac] hover:bg-[#f3ead5] text-[#b98503]">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contacto;
