import Image from "next/image";
import { Inter } from "next/font/google";
import Product from "./components/Product";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-200 ">
      <div className="max-w-screen-xl mx-auto">
        <Product />
      </div>
    </main>
  );
}
