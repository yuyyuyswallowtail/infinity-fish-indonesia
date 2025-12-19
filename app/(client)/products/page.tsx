import FadeUp from "@/components/animation/FadeUp";
import AutoBreadcrumb from "@/components/AutoBreadcrumb";
import ProductItems from "@/components/product/ProductItems";
import { TypographyH1 } from "@/components/Typography";
import { Fish } from "lucide-react";
import Marquee from "react-fast-marquee";

const Product = () => {
  return (
    <>
      <AutoBreadcrumb />
      <Marquee className="border-y-4">
        <TypographyH1 className="flex justify-center items-center gap-2 py-6">
          <Fish size={36} />Our Products
        </TypographyH1>
      </Marquee>
      <section className="container flex flex-col justify-center items-center w-full gap-8 p-4">
        <FadeUp>
          <ProductItems />
        </FadeUp>
      </section>
    </>
  )
}

export default Product;
