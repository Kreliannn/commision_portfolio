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


export default function TransactionMobile() {
  return (
    <Carousel className="m-auto h-auto w-72 md:hidden" >
      <CarouselContent>
        {transactions.map((transaction, index) => (
          <CarouselItem key={index} >
            <div className="p-1 h-auto w-72 relative">
              <img src="/logo.png" alt="logo"  className="absolute top-1/2 left-1/2 w-24 h-24 opacity-15 bg-slate-900 rounded-lg -translate-x-1/2 -translate-y-1/2" />
              <h1 className="absolute"> {transaction}</h1>
              <Card className=" ">
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