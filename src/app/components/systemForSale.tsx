"use client"
import { systemsForSale } from "../data/systemForSale"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Facebook, Phone, ArrowRight, Code, Palette, Database, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useState } from "react"
import LoadingPage from "./loadingPage"
import { truncateString } from "../functions/functions"
import { getIcon } from "../functions/functions"

export default function SystemForSale()
{
    const router = useRouter();
    const [isLoading, setIsloading] = useState(false)
  

    return(
 <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">

            {isLoading && <LoadingPage />}

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Systems For Sale </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center mb-5">
              I sell ready-made systems including free full system setup on your device, and free system name and logo customization.
            </p>

            
            <div className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-slate-600 ">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {systemsForSale.length} Available System
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {systemsForSale.map((system) => (
              <Card
                key={system.id}
                className={`p-0 group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl `}
              >
               
                <div className="absolute top-2 right-2 border border-green-500 z-10 shadow-lg rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center">
                  <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 font-bold text-green-500 text-2xl">
                    {system.price}
                  </div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
                  <img
                    src={system.image || "/placeholder.svg"}
                    alt={system.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="">
                  <CardTitle className="text-xl font-semibold mb-2">{system.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{truncateString(system.description)}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {system.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="flex gap-1 px-3 py-1 font-semibold bg-white text-gray-700 text-xs rounded-full border border-gray-200 shadow-lg"
                    >
                      <img src={getIcon(tech)} alt="" className="w-5 h-5 rounded-lg" />
                      {tech}
                    </span>
                     
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3 font-medium transition-colors duration-200"
                    onClick={() =>{
                        router.push(`/system/${system.id}`)
                        setIsloading(true)
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          


    </div>
    )
}