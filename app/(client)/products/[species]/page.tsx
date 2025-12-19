import AutoBreadcrumb from "@/components/AutoBreadcrumb";
import { TypographyH1, TypographyP } from "@/components/Typography";
import { ZoomImage } from "@/components/ZoomImage";
import InfiniteProductStocks from "@/components/product/InfiniteScrollProductStocks";
import { Product } from "@/components/product/ProductItems";
import products from "@/datas/product.json"
import { stringToSlug } from "@/utils/stringToSlug";
import Image from "next/image";

const ProductDetail = async ({ params }: { params: Promise<{ species: string }> }) => {
  const { species } = await params;

  const filteredProducts = products.filter((product: Product) => stringToSlug(product.species) === species)[0]

  return <>
    <AutoBreadcrumb />

    <section className="flex flex-col justify-center items-center p-4 text-justify gap-4">
      {
        !species || !filteredProducts ?
          <div className="flex justify-center items-center min-h-dvh">
            <TypographyH1>
              Oops, Data Products Cannot Be Found!
            </TypographyH1>
          </div>
          :
          <div className="flex flex-col justify-center items-center text-justify max-w-160 w-full gap-4 p-4 capitalize">
            <TypographyH1>{filteredProducts.species}</TypographyH1>
            <ZoomImage>
              <Image src={filteredProducts.path} alt={filteredProducts.species} width={500} height={500} loading="lazy" className="w-full h-auto rounded-md mt-4" />
            </ZoomImage>
            <TypographyP className="whitespace-pre-line">{filteredProducts.detail}</TypographyP>
            {
              filteredProducts.stocks.length > 1 ?
                <InfiniteProductStocks stocks={filteredProducts.stocks} />
                : null
            }
          </div>
      }
    </section>
  </>
}

export default ProductDetail;
