import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20 min-h-screen"
    >
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Hei, olen Rapukeisari 🦀</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Web-kehittäjä intohimolla visuaalisuuteen ja toimivuuteen.
      </p>
      <a href="#projects" className="mt-6 inline-block px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition">
        Katso projektini
      </a>
    </motion.section>
  );
}

