"use client"
import { useMemo, useState } from "react"
import { Card, CardTitle } from "@/components/ui/card"
import products from "@/datas/product.json"
import { useDebounce } from "@/hooks/useDebounce"
import Image from "next/image"
import Link from "next/link"
import { stringToSlug } from "@/utils/stringToSlug"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { scrollToTop } from "@/utils/scrollToTop"

export type Stock = {
  "id": number;
  "name": string;
  "path": string;
}

export type Product = {
  "id": number;
  "species": string;
  "path": string;
  "detail": string;
  "stocks": Stock[];
}

const ProductItems = () => {
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)
  const { debouncedValue, isLoading } = useDebounce(search, 400)

  const filteredProducts = useMemo(() => {
    if (!debouncedValue) return products

    return products.filter((product: Product) =>
      product.species
        .toLowerCase()
        .includes(debouncedValue.toLowerCase())
    )
  }, [debouncedValue])

  return <div className="flex flex-col justify-center items-center w-full gap-4">
    <div className="flex flex-col justify-center items-center w-full">
      <Command shouldFilter={false} className="w-full rounded-lg border">
        <CommandInput
          placeholder="Search species..."
          value={search}
          onValueChange={(v) => {
            setSearch(v)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
        />

        {open && (
          <CommandList className="w-full">
            <CommandGroup>
              {filteredProducts.slice(0, 6).map((product) => (
                <CommandItem
                  key={product.id}
                  value={product.species}
                  onSelect={(value) => {
                    setSearch(value)
                    setOpen(false)
                  }}
                >
                  {product.species}
                </CommandItem>
              ))}

              {!isLoading && filteredProducts.length === 0 && (
                <CommandEmpty>Species not found</CommandEmpty>
              )}
            </CommandGroup>
          </CommandList>
        )}
      </Command>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-4 pb-16 w-full">
        {!isLoading &&
          filteredProducts.map((product: Product) => (
            <Link href={`/products/${stringToSlug(product.species)}`} className="h-full w-full cursor-pointer mt-16" onClick={scrollToTop} key={product.id}>
              <Card className="flex flex-col justify-top items-center text-center w-full h-full gap-2 p-2 hover:bg-primary hover:text-background capitalize">
                <Image src={product.path} alt={product.species} width={500} height={500} loading="lazy" className="w-full h-full rounded-md" />
                <CardTitle className="py-2">
                  {product.species}
                </CardTitle>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  </div>
}
export default ProductItems;
