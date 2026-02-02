"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import Image from "next/image";
import { useVisibility } from "@/hooks/useVisibility";

const navItems = [
  {
    name: "About",
    to: "abstract",
  },
  {
    name: "Recorded Talks",
    to: "recorded-talks",
  },
  {
    name: "Program",
    to: "program",
  },
  {
    name: "Speakers",
    to: "speakers",
  },
  {
    name: "Sponsors",
    to: "sponsors",
  },
  {
    name: "Organizers",
    to: "organizers",
  },
  {
    name: "Location",
    to: "location",
  },
];

interface NavbarProps {
  edition?: string;
}

export default function Navbar({ edition }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled, isInactive } = useVisibility();

  // Handle scroll lock and prevent layout shift
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Prevent layout shift
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isMenuOpen]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-100 ${
          isScrolled || isMenuOpen
            ? "bg-black/80 backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center gap-4">
              {isScrolled && (
                <div
                  className="relative h-12 sm:h-16 w-40 cursor-pointer"
                  onClick={handleLogoClick}
                >
                  <Image
                    src="/logo.png"
                    alt="Conference Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
              {/* Edition tabs */}
              <div className={`flex items-center gap-2 ${
                isInactive && !isScrolled ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}>
                <NextLink
                  href="/"
                  className={`px-3 py-1 text-sm font-semibold rounded-full border transition-all duration-300 ${
                    !edition
                      ? "bg-white/20 text-white border-white/50"
                      : "text-white/70 border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Current
                </NextLink>
                <NextLink
                  href="/2025"
                  className={`px-3 py-1 text-sm font-semibold rounded-full border transition-all duration-300 ${
                    edition === "2025"
                      ? "bg-white/20 text-white border-white/50"
                      : "text-white/70 border-white/20 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  2025
                </NextLink>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div
                className={`ml-10 flex items-baseline space-x-6 transition-opacity duration-300 ${
                  isInactive && !isScrolled ? "opacity-0" : "opacity-100"
                }`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={false}
                    offset={-96}
                    duration={100}
                    className="cursor-pointer px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none z-50 transition-opacity duration-300 ${
                  isInactive && !isScrolled ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 z-40"
            : "opacity-0 pointer-events-none -z-10"
        }`}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="px-2 pt-2 pb-3 space-y-4">
            {/* Edition tabs for mobile */}
            <div className="flex justify-center gap-4 mb-6 pb-4 border-b border-white/20">
              <NextLink
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 text-base font-semibold rounded-full border transition-all ${
                  !edition
                    ? "bg-white/20 text-white border-white/50"
                    : "text-white/70 border-white/20"
                }`}
              >
                Current
              </NextLink>
              <NextLink
                href="/2025"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 text-base font-semibold rounded-full border transition-all ${
                  edition === "2025"
                    ? "bg-white/20 text-white border-white/50"
                    : "text-white/70 border-white/20"
                }`}
              >
                2025
              </NextLink>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={false}
                offset={-96}
                duration={100}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-xl font-semibold text-white/90 hover:text-white transition-colors text-center"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
