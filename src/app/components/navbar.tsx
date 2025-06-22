"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname(); // Get current URL path

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <img
              src={"/logo.jpg"}
              alt={"Kian Dev Logo"}
              className="w-full h-full rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span className="text-xl font-semibold tracking-tight">KRLN</span>
        </div>

        {pathname !== "/" && (
          <div className=" md:flex items-center gap-8">
            <p
              onClick={() => router.push("/")}
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium cursor-pointer"
            >
              Home
            </p>
          </div>
        )}
      </div>
    </nav>
  );
}
