"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Throttle scroll updates để tối ưu performance
  useMotionValueEvent(scrollY, "change", (latest) => {
    const newScrolled = latest > 50;
    // Chỉ update state khi thay đổi để tránh re-render không cần thiết
    if (newScrolled !== scrolled) {
      setScrolled(newScrolled);
    }
  });

  // Detect active section based on pathname and scroll position
  useEffect(() => {
    // If on blog page, set blog as active
    if (pathname === "/blog") {
      setActiveSection("/blog");
      return;
    }

    // If on about page, set about as active
    if (pathname === "/about") {
      setActiveSection("/about");
      return;
    }

    // Only do scroll spy on home page (where sections exist)
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.substring(1));

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(`#${sections[i]}`);
            return;
          }
        }
      }

      // If at top of page, set home as active
      if (window.scrollY < 100) {
        setActiveSection("#home");
      }
    };

    // Initial check
    handleScroll();

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      // If on a different page, navigate to home first
      if (pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Update active section immediately for better UX
        setActiveSection(href);
      }
    } else {
      // For non-hash links (like /blog), use normal navigation
      window.location.href = href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass dark:glass-dark shadow-lg backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer flex items-center justify-center overflow-hidden rounded-lg"
            style={{ 
              width: '64px', 
              height: '48px',
              borderRadius: '8px',
              marginTop: '4px'
            }}
          >
            <Image
              src="/img/logo.png"
              alt="Portfolio Logo"
              width={124}
              height={108}
              className="object-contain rounded-lg"
              style={{ 
                objectPosition: 'center',
                width: 'calc(100% + 60px)',
                height: 'calc(100% + 60px)',
                margin: '-30px',
                borderRadius: '8px'
              }}
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;
              const isHashLink = link.href.startsWith("#");
              
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative transition-colors font-medium px-2 py-1 ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-black to-gray-700 dark:from-white dark:to-gray-300 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.span
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-black dark:bg-white"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 glass dark:glass-dark rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass dark:glass-dark rounded-xl p-4 space-y-2"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-black/20 dark:bg-white/20 text-black dark:text-white font-semibold"
                      : "hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
