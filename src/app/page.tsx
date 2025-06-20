"use client"

import { Heart, Facebook, Phone, ArrowRight, Code, Palette, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { systemsForSale } from "./data/systemForSale"
import {services} from "./data/services"
import { techStack } from "./data/techStack"
import TechStackSection from "./components/techStackSection"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { useRouter } from "next/navigation"
import TransactionMobile from "./components/transactionImgMobile"
import TransactionDesktop from "./components/transactionImgDesktop"

function truncateString(str : string) {
    const maxLength = 150;
    const suffix = "........";
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - suffix.length) + suffix;
}


export default function HomePage() {

  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 ">
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
              Browse Systems
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
      </section>

      <TechStackSection />



     

      {/* Commission Info Section */}
      <section id="commission" className="px-6 py-24 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Open For Commission</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I accept commissions for all kinds of programming projects — built from scratch based on your specific
              requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-10">

            

            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Pricing Range</h3>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-green-500 mb-2">₱250 - ₱5,000</div>
                <p className="text-slate-600">Based on project complexity and timeline</p>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                {
                  services.map((service, index) => (
                    <div key={index}>
                      <div  className="flex justify-between">
                        <span className="font-semibold text-lg text-stone-800">{service.title}</span>
                        <span className="font-medium text-green-600 mt-2">{service.price}</span>
                      </div>
                      <p className="text-xs">- {service.desc}</p>
                    </div>
             
                  ))
                }
              </div>
             
            </div>


             <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg">
             
               <div className="max-w-2xl mx-auto p-6">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6">Interested?</h2>
                  <p className="text-slate-700 mb-6">You can avail my service by messaging me directly on:</p>

                  <div className="space-y-4 mb-8">
                    {/* TikTok */}
                    <div className="flex items-center gap-4 p-4  rounded-lg hover:bg-stone-50 bg-white shadow-lg" >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                        alt="TikTok"
                        className="w-10 h-10 rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">TikTok</h3>
                        <p className="text-slate-600">@krelq</p>
                      </div>
                      <a
                        href="https://www.tiktok.com/@krelq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                      >
                        Visit
                      </a>
                    </div>

                    {/* Facebook */}
                    <div className="flex items-center gap-4 p-4  rounded-lg hover:bg-stone-50 bg-white shadow-lg">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                        alt="Facebook"
                        className="w-10 h-10 rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">Facebook</h3>
                        <p className="text-slate-600">K ian Dev</p>
                      </div>
                      <a
                        href="https://www.facebook.com/profile.php?id=61577572921830"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Visit
                      </a>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://www.tiktok.com/@krelq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-black transition-colors"
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" className="w-5 h-5" />
                      @krelq
                    </a>
                    <span className="text-slate-400">•</span>
                    <a
                      href="https://www.facebook.com/profile.php?id=61577572921830"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-5 h-5" />K ian
                      Dev
                    </a>
                  </div>
                </div>
              </div>  



            </div>

          </div>
        </div>
      </section>


       {/* System For Sale Section */}
      <section id="systems" className="px-6 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Systems For Sale </h2>
            
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
                    {system.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-full px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3 font-medium transition-colors duration-200"
                    onClick={() => router.push(`/system/${system.id}`)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-medium"
            >
              View All Systems
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-white py-10 w-5/6 m-auto ">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-center"> Proof Of Legitimacy </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center mb-5">
           Past transactions with my clients to show trust and transparency.
        </p>
        <TransactionMobile />
        <TransactionDesktop />
      </div>
        
     

  
      {/* Footer */}
      <Footer />


    </div>
  )
}

