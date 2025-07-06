import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";

import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Header />
      <motion.main
        className="transition-colors duration-500 ease-in-out pt-24 font-sans bg-white dark:bg-black text-black dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}

