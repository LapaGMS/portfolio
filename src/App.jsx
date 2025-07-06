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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(matchDark.matches);
    const listener = (e) => setIsDark(e.matches);
    matchDark.addEventListener("change", listener);
    return () => matchDark.removeEventListener("change", listener);
  }, []);

  return (
    <>
      <Header />
      <motion.main
  className="
    transition-colors duration-500 ease-in-out pt-24 font-sans text-black dark:text-white
    bg-light-gradient dark:bg-dark-gradient
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