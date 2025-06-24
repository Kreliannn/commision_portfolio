import { Button } from "@/components/ui/button"
import Navbar from "@/app/components/navbar"
import { systemsForSale } from "@/app/data/systemForSale"
import { Tag, DollarSign, Info, ImageIcon } from "lucide-react"
import Footer from "@/app/components/footer"
import { getIcon } from "@/app/functions/functions"

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function System({ params }: PageProps) {
  const { id } = await params;
  const system = systemsForSale.find((sys) => sys.id.toString() === id);

  if (!system) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-2xl font-medium text-gray-900">System not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-7">

        <img
          src={system?.image || "/placeholder.svg"}
          alt={`${system.title}`}
          className="rounded-lg shadow-lg block md:hidden  w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 mb-5"
        />

        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <h1 className="font-semibold text-4xl font-light text-gray-900 leading-tight">{system.title}</h1>
            <div className="flex items-center gap-2 text-3xl font-medium text-emerald-600">
              <span className="text-stone-500 text-lg block md:hidden"> price </span> {system.price}
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{system.description}</p>
        </div>

        {/* Technologies Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Tag className="w-5 h-5 text-gray-700" />
            <h2 className="text-xl font-medium text-gray-900">Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {system.tech.map((tech, index) => (
              <span
                key={index}
                className="flex gap-2 px-3 py-1 font-semibold bg-white text-gray-700 text-sm rounded-full border border-gray-200 shadow-lg"
              >
                <img src={getIcon(tech)} alt="" className="w-5 h-5 rounded-lg" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-5 h-5 text-gray-700" />
            <h2 className="text-xl font-medium text-gray-900">Details</h2>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <pre className="whitespace-pre-wrap text-xs text-gray-700 leading-relaxed font-mono">
              {system.information}
            </pre>
          </div>
        </div>


        

        {/* Images Section */}
        {system.images && system.images.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="w-5 h-5 text-gray-700" />
              <h2 className="text-xl font-medium text-gray-900"> System Preview </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
              {system.images.map((img, index) => (
                <div
                  key={index}
                  className="relative group relative  overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-lg"
                >
                  <img src="/logo.png" alt="logo"  className="absolute top-1/2 left-1/2 w-24 h-24 opacity-10 bg-slate-900 rounded-lg -translate-x-1/2 -translate-y-1/2" />
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${system.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 "
                  />
                </div>
              ))}
            </div>
          </div>
        )}

    
      {/* How to Buy Section */}
      <div className="max-w-2xl mx-auto p-6">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">How to Buy</h2>
        <p className="text-slate-700 mb-6">You can purchase by messaging me directly on:</p>

        <div className="space-y-4 mb-8">
          {/* TikTok */}
          <div className="flex items-center gap-4 p-4  rounded-lg hover:bg-stone-50 bg-white shadow-lg" >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
              alt="TikTok"
              className="w-10 h-10 rounded-lg "
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
              <p className="text-slate-600">KRLN</p>
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

      <Footer />
    </div>
  )
}
