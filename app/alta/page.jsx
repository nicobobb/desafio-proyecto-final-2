import React from "react";

const Alta = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url("bg-alta.jpg")` }}
                className="h-96 w-full bg-cover bg-center"
            >
                <h3 className="text-[#c78f02] font-bold text-2xl h-full flex justify-center items-center">
                    Alta
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
                        <span className="px-2">Precio (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Stock (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Marca (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Categoría (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Descripción corta (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Descripción larga (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2  ">
                    <input
                        type="checkbox"
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
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Edad hasta (*)</span>
                    </legend>
                    <input className="py-1 rounded-sm bg-[#fffbf2] focus:outline-none" />
                </fieldset>
                <fieldset className="my-4 pt-px pl-2 bg-[#fffbf2] text-[#c78f02] border rounded outline-none border-[#c78f02]">
                    <legend className="px-2">
                        <span className="px-2">Foto (*)</span>
                    </legend>
                    <input
                        type="file"
                        className="py-1 file:rounded-sm rounded-sm bg-[#fffbf2] focus:outline-none block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:font-semibold file:bg-[#f3ead5] file:text-[#c78f02] hover:file:bg-[#e7d6ac]"
                    />
                </fieldset>
                <div className="text-center">
                    <button className="py-2 px-4 border border-[#b98503] rounded shadow-md bg-[#e7d6ac] hover:bg-[#f3ead5] text-[#b98503]">
                        Cargar producto
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Alta;
