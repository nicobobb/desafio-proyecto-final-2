import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Proyecto Final (2º Parte) - Nicolás Bobb",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
