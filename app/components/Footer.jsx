import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="bg-[#fab302] text-center py-2.5">
                <h3>Seguinos en nuestras redes!</h3>
                <div className="flex justify-center">
                    <span className="p-2.5">
                        <Link
                            href="#"
                            className="text-[#c78f02] hover:text-[#fed264] text-3xl"
                        >
                            <FaInstagram />
                        </Link>
                    </span>
                    <span className="p-2.5">
                        <Link
                            href="#"
                            className="text-[#c78f02] hover:text-[#fed264] text-3xl"
                        >
                            <FaWhatsapp />
                        </Link>
                    </span>
                </div>
            </div>
            <div className="bg-[#c78f02] text-center py-2.5 text-[#fffbf2]">
                <p>© Juguetería Toys 2000-2024.</p>
            </div>
        </>
    );
};

export default Footer;
