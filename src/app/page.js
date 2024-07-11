import Header from "@/components/header/Header";
import ProductWrapper from "@/components/product-wrapper/ProductWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Counter</h2>
      <Header />
      <ProductWrapper />
    </div>
  );
}
