import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FadeInSection from "@/components/FadeInSection";

import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Header />
      <motion.main
  className="
    transition-colors duration-500 ease-in-out pt-24 font-sans text-black dark:text-white
    bg-[length:100%_100%] bg-no-repeat
    bg-gradient-to-b from-gray-100 via-purple-300 via-40% to-gray-200
    dark:bg-gradient-to-b dark:from-black dark:via-purple-950 via-40% dark:to-black
  "
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
        <Hero />

        <FadeInSection>
          <About />
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <Projects />
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Contact />
        </FadeInSection>

        <FadeInSection>
          <Footer />
        </FadeInSection>
      </motion.main>
    </>
  );
}