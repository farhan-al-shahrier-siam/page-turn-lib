import React from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { LuBookOpen, LuLibrary, LuCompass } from 'react-icons/lu';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2c2420] flex flex-col items-center justify-between px-4 py-12 relative overflow-hidden font-sans selection:bg-[#e8dacb] selection:text-[#2c2420]">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-60"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#f3e7d7] via-[#faeedf] to-transparent blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center mt-6">
        
        {/* Book Illustration / Icon */}
        <div className="mb-4 relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-[#f4ebe1] border border-[#e5d8c8] flex items-center justify-center shadow-sm">
            <LuBookOpen className="w-8 h-8 text-[#9c7d58] stroke-[1.5]" />
          </div>
          {/* Subtle floating decorative leaf / dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#c8924b]/40 animate-pulse" />
        </div>

        {/* Fascicle Pill Badge */}
        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase text-[#a07e59] bg-[#f5ede3] border border-[#e8dbc9] mb-3">
          Fascicle Unbound
        </span>

        {/* Archive Metadata Subtitle */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#8e8275] font-medium">
          Archive Index 0x404 <span className="mx-1">•</span> Missing Folio
        </p>
        <p className="font-serif italic text-xs text-[#a3907c] mt-0.5 mb-2">
          folio desunt
        </p>

        {/* Large 404 Serif */}
        <h1 className="font-serif text-7xl md:text-8xl font-normal text-[#d97736] tracking-tight leading-none my-1 select-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#1c1815] tracking-tight mb-3">
          Page Lost in the Stacks
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-[#6f675e] leading-relaxed max-w-md mx-auto mb-7 font-light">
          The ledger, shelf location, or folio you are searching for has been carefully moved to deep storage, reclassified, or never existed in our recorded collection.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mb-10">
          <Link
            href="/"
            className="w-full sm:w-1/2 flex items-center justify-center gap-2.5 bg-[#121110] hover:bg-[#252321] text-white text-xs font-medium py-3 px-4 rounded-lg shadow-sm transition-all"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Library Home</span>
          </Link>

          <Link
            href="/catalog"
            className="w-full sm:w-1/2 flex items-center justify-center gap-2.5 bg-[#f6eee4] hover:bg-[#ede3d7] border border-[#ded2c2] text-[#2f2924] text-xs font-medium py-3 px-4 rounded-lg shadow-sm transition-all"
          >
            <LuLibrary className="w-4 h-4 text-[#7b6b5a]" />
            <span>Browse Shelf Catalog</span>
          </Link>
        </div>

        {/* Recommended Reading Passages Section */}
        <div className="w-full max-w-lg bg-[#f7f0e6]/70 border border-[#e6dacb] rounded-xl p-5 shadow-sm">
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8a7a69] mb-3">
            Recommended Reading Passages
          </h3>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#524941]">
            <Link href="/books" className="hover:text-[#1a1715] transition-colors">
              <span className="text-[#d97736] mr-1.5">•</span>All Books
            </Link>
            <Link href="/rare-acquisitions" className="hover:text-[#1a1715] transition-colors">
              <span className="text-[#d97736] mr-1.5">•</span>Rare Acquisitions
            </Link>
            <Link href="/my-reading-desk" className="hover:text-[#1a1715] transition-colors">
              <span className="text-[#d97736] mr-1.5">•</span>My Reading Desk
            </Link>
            <Link href="/help" className="flex items-center gap-1.5 hover:text-[#1a1715] transition-colors">
              <LuCompass className="w-3.5 h-3.5 text-[#8a7a69]" />
              <span>Librarian Desk</span>
            </Link>
          </nav>
        </div>

      </div>

      {/* Footer Quote */}
      <footer className="relative z-10 mt-10 text-center">
        <blockquote className="font-serif italic text-xs text-[#95887b] max-w-md mx-auto">
          &ldquo;Not all who wander the quiet aisles are lost, yet some call numbers remain forever silent.&rdquo;
        </blockquote>
      </footer>
    </main>
  );
}