import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { transactions } from "../data/proof"

export default function TransactionDesktop() {
  return (
    <Carousel className="w-full max-w-6xl hidden md:block m-auto">
      <CarouselContent className="-ml-1">
        {transactions.map((transaction, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/5 lg:basis-1/5">
            <div className="p-1 relative">
              <img src="/logo.png" alt="logo"  className="absolute top-1/2 left-1/2 w-24 h-24 opacity-15 bg-slate-900 rounded-lg -translate-x-1/2 -translate-y-1/2" />
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0 ">
                  <img
                    src={transaction}
                    alt={`Transaction ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}