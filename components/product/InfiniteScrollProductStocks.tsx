"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { Fish, Loader2 } from "lucide-react"
import { Stock } from "./ProductItems"
import { Card, CardTitle } from "@/components/ui/card"
import { TypographyH1 } from "../Typography"
import { Button } from "../ui/button"
import { useDebounce } from "@/hooks/useDebounce"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

const BATCH_SIZE = 6

const InfiniteProductStocks = ({ stocks }: { stocks: Stock[] }) => {
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)

  const { debouncedValue, isLoading } = useDebounce(search, 400)

  const filteredStocks = useMemo(() => {
    if (!debouncedValue) return stocks

    return stocks.filter((stock) =>
      stock.name.toLowerCase().includes(debouncedValue.toLowerCase())
    )
  }, [debouncedValue, stocks])

  const visibleItems = useMemo(() => {
    return filteredStocks.slice(0, page * BATCH_SIZE)
  }, [filteredStocks, page])

  useEffect(() => {
    setPage(1)
  }, [debouncedValue])

  const loadMoreItems = () => {
    setPage((prev) => prev + 1)
  }

  const allItemsLoaded = visibleItems.length >= filteredStocks.length

  return (
    <>
      <TypographyH1 className="flex justify-center items-center gap-2 py-8">
        <Fish size={48} /> Now Available <Fish size={48} />
      </TypographyH1>

      <div className="flex w-full">
        <Command shouldFilter={false} className="rounded-lg border">
          <CommandInput
            placeholder="Search species..."
            value={search}
            onValueChange={(v) => {
              setSearch(v)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
          />

          {isLoading && (
            <Loader2 className="absolute right-3 top-2.5 h-5 w-5 animate-spin text-muted-foreground" />
          )}

          {open && (
            <CommandList>
              <CommandGroup>
                {filteredStocks.slice(0, 6).map((stock) => (
                  <CommandItem
                    key={stock.id}
                    value={stock.name}
                    onSelect={(value) => {
                      setSearch(value)
                      setOpen(false)
                    }}
                  >
                    {stock.name}
                  </CommandItem>
                ))}

                {!isLoading && filteredStocks.length === 0 && (
                  <CommandEmpty>Species not found</CommandEmpty>
                )}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {visibleItems.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col items-center text-center gap-2 p-2 capitalize"
          >
            <Image
              src={item.path}
              alt={item.name}
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
            <CardTitle className="py-2 mt-auto">
              {item.name}
            </CardTitle>
          </Card>
        ))}
      </div>

      {!allItemsLoaded && (
        <Button className="w-full mt-4 cursor-pointer" onClick={loadMoreItems}>
          <Fish /> Next Fish
        </Button>
      )}
    </>
  )
}

export default InfiniteProductStocks
