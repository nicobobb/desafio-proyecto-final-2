import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { HiShoppingCart } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="bg-[#fab302] py-2 text-center">
                <Link href="/">
                    <Image
                        src="/logo-toys.png"
                        width={265}
                        alt="logo"
                        height={75}
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
                                <Dialog>
                                    <DialogTrigger>
                                        <HiShoppingCart className="text-3xl" />
                                    </DialogTrigger>
                                    <DialogContent className="bg-[#ffefc9]">
                                        <DialogHeader>
                                            <DialogTitle className="py-2 text-center text-[#c8902c]">
                                                Carrito
                                            </DialogTitle>
                                            <DialogDescription>
                                                This action cannot be undone.
                                                This will permanently delete
                                                your account and remove your
                                                data from our servers.
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
