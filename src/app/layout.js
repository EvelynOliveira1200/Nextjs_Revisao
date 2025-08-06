import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
    title: "Loja de Eletrônicos",
    description: "Revisão de front-end",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                sizes: "any",
            }
        ],
        shortcut: "/icons/favicon.ico",
        apple: "/icons/favicon.ico",
    },
};

const loraFonts = localFont({
    src: [
        {
            path: "../../public/fonts/Lora-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Lora-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-lora",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={loraFonts.variable}>
            <body className={loraFonts.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
