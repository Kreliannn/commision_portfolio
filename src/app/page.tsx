
import TechStackSection from "./components/techStackSection"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import SystemForSale from "./components/systemForSale"
import TransactionMobile from "./components/transactionImgMobile"
import TransactionDesktop from "./components/transactionImgDesktop"
import CommissionSection from "./components/commisionSection"
import HeroSection from "./components/heroSection"



export default function HomePage() {

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">

      <Navbar />
     
      <section className="px-6 py-20 md:py-32 ">
        <HeroSection />
      </section>

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