'use client'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { Menu, X } from "lucide-react";
import { usePathname,  useSearchParams } from "next/navigation";
import MobileNav from "./MobileNav";



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const router = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [router, searchParams]);


  return (
    <header className="px-4 flex flex-col justify-between items-center h-14 py-2  relative z-10">
      <div className="w-full flex justify-between items-center">
        <a href="/">
          <Image
            src="/logo.svg"
            alt="The Next Game Platform"
            height={33.6}
            width={116.56}
            loading="eager"
          />
        </a>
        {/* Desktop Search Bar */}
        <div className="hidden md:block">
          <Search />
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileNav/>
      )}
    </header>
  );
}
