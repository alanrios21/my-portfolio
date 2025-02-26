import { Poppins } from "next/font/google";
import "./globals.css";
import ClientProviders from "./ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Mi Portafolio",
  icons: {
    icon: "/cohete.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
