import { services } from "../data/services";

export default function CommissionSection() {
  return (
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
  );
}