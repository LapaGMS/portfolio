import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Etusivu", href: "#" },
    { label: "Minusta", href: "#about" },
    { label: "Projektit", href: "#projects" },
    { label: "Yhteys", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur border-b transition-all duration-300 ${
        scrolled ? "bg-white/70 dark:bg-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">Lassi Määttä</a>
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)}>
            <span className="sr-only">Avaa valikko</span>
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-2 flex flex-col gap-4 bg-white dark:bg-pink-900 p-4 rounded shadow">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:underline" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
