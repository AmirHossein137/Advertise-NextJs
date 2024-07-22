import { Inter } from "next/font/google";
import UiProvider from "@/providers/UiProvider";
import Layout from "@/layout/Layout";
import Header from "@/modules/Header";
import NextAuthProvider from "@/providers/NextAuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advertise App",
  description: "Advertise App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>
          <NextAuthProvider>
            <Layout>
              <Header />
              {children}
            </Layout>
          </NextAuthProvider>
        </UiProvider>
      </body>
    </html>
  );
}
