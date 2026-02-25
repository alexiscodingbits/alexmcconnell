"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const BlackHole = dynamic(() => import("./BlackHole"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Black hole background */}
      <div className="absolute inset-0 z-0">
        <BlackHole />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="animate-fade-up">
          <p className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-copper/80 uppercase mb-6">
            // portfolio
          </p>
        </div>

        <h1 className="animate-fade-up delay-200 font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl text-off-white tracking-tight mb-6 leading-tight">
          Alex McConnell
        </h1>

        <div className="animate-fade-up delay-400">
          <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-slate-light/70 mb-10 max-w-xl mx-auto">
            I like to build things.
          </p>
        </div>

        <div className="animate-fade-up delay-600 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="font-[family-name:var(--font-heading)] text-xs tracking-wider uppercase px-6 py-3 border border-copper/60 text-copper hover:bg-copper/10 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="font-[family-name:var(--font-heading)] text-xs tracking-wider uppercase px-6 py-3 text-slate-light/60 hover:text-copper transition-colors"
          >
            Get in Touch
          </a>
        </div>

        <div className="animate-fade-up delay-600 mt-10 flex justify-center">
          <div
            className="rounded-full p-[2px] shrink-0"
            style={{
              width: 224,
              height: 224,
              background: "linear-gradient(135deg, #d4884a, #e8a76a, #9a5f2a, #d4884a)",
              boxShadow: "0 0 12px rgba(212,136,74,0.2)",
            }}
          >
            <div className="rounded-full overflow-hidden w-full h-full">
              <Image
                src="/Profile.png"
                alt="Alex McConnell"
                width={220}
                height={220}
                className="object-cover block w-full h-full rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-600">
        <div className="w-px h-12 bg-gradient-to-b from-copper/60 to-transparent mx-auto mb-2" />
        <p className="font-[family-name:var(--font-heading)] text-[10px] text-slate/40 tracking-widest uppercase">
          Scroll
        </p>
      </div>
    </section>
  );
}
