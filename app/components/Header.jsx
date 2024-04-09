import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { HiShoppingCart } from "react-icons/hi";

export default function Header() {
    return (
        <>
            <div className="bg-[#fab302] py-2 text-center">
                <img src="/logo-toys.png" width={100} className="mx-auto" />
            </div>
            <div className="bg-[#ffefc9] py-2 text-center text-[#c8902c]">
                <div>
                    <nav>
                        <ul className="flex justify-evenly">
                            <li>Alta</li>
                            <li>Contacto</li>
                            <li>Nosotros</li>
                            <li>
                                <Dialog>
                                    <DialogTrigger>
                                        <HiShoppingCart />
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Carrito</DialogTitle>
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
