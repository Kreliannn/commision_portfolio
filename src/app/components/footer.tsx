import { Heart, Facebook, Phone, ArrowRight, Code, Palette, Database, Globe } from "lucide-react"


export default function Footer() {

    return(
            <footer className="bg-slate-900 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
           
              <span className="text-2xl font-semibold">K ian Dev</span>
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
    )

}