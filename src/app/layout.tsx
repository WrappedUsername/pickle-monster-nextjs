import "./globals.scss";
import { Oswald } from "next/font/google";
import Head from "next/head";
import Nav from "./components/Nav"
import Footer from "./components/Footer";

const font = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Pickle Monster Cinematics",
  description: "Digital aviation art, DCS World movies, missions, and modules",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <title>Pickle Monster Cinematics</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
