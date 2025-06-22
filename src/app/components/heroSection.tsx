"use client"
import {  ArrowRight,  } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {

    return (
      <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2 text-sm font-medium text-slate-600 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for new projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Need a System for Your School Project?
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            I create custom web systems and sell ready-to-use solutions — perfect for students and IT projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl group"
              onClick={() => document.getElementById("systems")?.scrollIntoView({ behavior: "smooth" })}
            >
              System for sale
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-medium transition-all duration-200"
              onClick={() => document.getElementById("commission")?.scrollIntoView({ behavior: "smooth" })}
            >
              Custom Commission
            </Button>
          </div>
        </div>
    )
    }