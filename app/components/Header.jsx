import Link from "next/link";
import Image from "next/image";
import CardModal from "./CardModal";

export default function Header() {
    return (
        <>
            <div className="bg-[#fab302] py-2 text-center">
                <Link href="/">
                    <Image
                        src="/logo-toys.png"
                        width={150}
                        alt="logo"
                        height={30}
                        className="mx-auto h-auto"
                    />
                </Link>
            </div>
            <div className="bg-[#ffefc9] py-2 text-center text-[#c8902c]">
                <div>
                    <nav>
                        <ul className="flex justify-evenly">
                            <li>
                                <Link
                                    href="/alta"
                                    className="text-lg font-semibold"
                                >
                                    Alta
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className="text-lg font-semibold"
                                >
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/nosotros"
                                    className="text-lg font-semibold"
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <CardModal />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
