"use client"

import { Heart, Facebook, Phone, ArrowRight, Code, Palette, Database, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { systemsForSale } from "./data/systemForSale"
import { sampleProjects } from "./data/sampleProject"
import {services} from "./data/services"
import { techStack } from "./data/techStack"
import TechStackSection from "./components/techStackSection"

export default function HomePage() {

  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <img
                    src={"/logo.jpg"}
                    alt={"Kian Dev Logo"}
                    className="w-full h-full rounded-lg  object-cover group-hover:scale-105 transition-transform duration-300"
                  />
            </div>
            <span className="text-xl font-semibold tracking-tight">ian Dev</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#systems"
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
            >
              Systems
            </a>
            <a
              href="#commission"
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium"
            >
              Commission
            </a>
          </div>
        </div>
      </nav>

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



      {/* System For Sale Section */}
      <section id="systems" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Ready-Made Systems</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Production-ready systems that you can use immediately for your projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {systemsForSale.map((system) => (
              <Card
                key={system.id}
                className={`p-0 group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl `}
              >
               
                <div className="absolute top-4 right-4 z-10 shadow-lg rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 font-semibold text-green-500">
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
                  <CardDescription className="text-slate-600 leading-relaxed">{system.description}</CardDescription>
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
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3 font-medium transition-colors duration-200">
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

      {/* Commission Info Section */}
      <section id="commission" className="px-6 py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Custom Development</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I accept commissions for all kinds of programming projects — built from scratch based on your specific
              requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
           

            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Pricing Range</h3>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-green-500 mb-2">₱1,000 - ₱5,000</div>
                <p className="text-slate-600">Based on project complexity and timeline</p>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Simple console programs</span>
                  <span className="font-medium">₱1,000 - ₱2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Desktop applications</span>
                  <span className="font-medium">₱2,000 - ₱3,500</span>
                </div>
                <div className="flex justify-between">
                  <span>Web applications</span>
                  <span className="font-medium">₱3,000 - ₱5,000</span>
                </div>
              </div>
             
            </div>


             <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">What I Build</h3>
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-lg">
                    <div className="w-2 h-2 bg-slate-900 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{service.title}</h4>
                      <p className="text-slate-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Commission Projects Gallery */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Recent Work</h2>
            <p className="text-xl text-slate-600">Sample projects I've built for clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProjects.map((project) => (
              <Card
                key={project.id}
                className=" p-0 group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
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
                    variant="outline"
                    className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl py-3 font-medium"
                  >
                    Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-slate-900 fill-slate-900" />
              </div>
              <span className="text-2xl font-semibold">Blank</span>
            </div>
            <p className="text-slate-400 max-w-md mx-auto">
              Creating custom programming solutions for students and businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span>@blank_systems</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </div>
              <span>Blank Systems</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors cursor-pointer">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <span>+63 XXX XXX XXXX</span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-sm">&copy; 2024 Blank. Crafted with precision and care.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

