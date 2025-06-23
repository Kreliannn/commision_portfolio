
import TechStackSection from "./components/techStackSection"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import SystemForSale from "./components/systemForSale"
import TransactionMobile from "./components/transactionImgMobile"
import TransactionDesktop from "./components/transactionImgDesktop"
import CommissionSection from "./components/commisionSection"
import HeroSection from "./components/heroSection"
import Link from "next/link"


export default function HomePage() {

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased relative">

   <div className="absolute top-3 w-full flex justify-between items-center px-4">
      {/* Left item */}
      <div className="bg-slate-900 rounded-full px-6 py-3 shadow-md text-sm font-bold text-white">
        <h1>KRLN</h1>
      </div>

      {/* Right items */}
      <div className="flex items-center gap-3"> 
        <a  href="https://www.facebook.com/profile.php?id=61577572921830" target="_blank" rel="noopener noreferrer" className="z-50">
            <div className=" text-white w-12 h-12 rounded-xl flex items-center justify-center bg-[#000000] transition-colors duration-300 md:w-10 md:h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.4V12h2.4v-1.6c0-2.37 1.41-3.69 3.56-3.69 1.03 0 2.1.18 2.1.18v2.31h-1.18c-1.17 0-1.54.73-1.54 1.48V12h2.63l-.42 2.88h-2.21v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </div>
        </a>


        <a href="https://www.tiktok.com/@krelq" target="_blank" rel="noopener noreferrer"  className="z-50">
          <div className="text-white w-12 h-12 rounded-xl flex items-center justify-center bg-[#000000] transition-colors duration-300 md:w-10 md:h-10">
            <svg className="w-6 h-6 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.76 20.5a6.34 6.34 0 0 0 10.86-4.43V7.83a8.2 8.2 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.8-.26z" />
            </svg>
          </div>
        </a>



        
      </div>

    </div>

         
     
      <section className="px-6 py-18 md:py-30 relative" >
        <HeroSection />
      </section>

      <Navbar />

      <section className="py-5 bg-slate-50/50 w-full">
        <TechStackSection />
      </section>

      <section id="commission" className="px-6 py-24 ">
        <CommissionSection />
      </section>


      <section id="systems" className="px-6 py-24 bg-slate-50">
        <SystemForSale />
      </section>

      <div className="bg-white py-10 w-5/6 m-auto ">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-center"> Proof Of Legitimacy </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center mb-5">
           Past transactions with my clients to show trust and transparency.
        </p>
        <TransactionMobile />
        <TransactionDesktop />
      </div>
        
     
      <Footer />

    </div>
  )
}