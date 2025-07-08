import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Viesti lähetetty (ei oikeasti vielä)!");
  };

  return (
    <motion.section
      id="contact"
      className="mx-auto p-6 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-8">Ota yhteyttä</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl mx-auto">
        <motion.input
          type="text"
          placeholder="Nimi"
          className="p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full
                   transition-all duration-200
                   hover:scale-[1.01] focus:scale-[1.02]
                   hover:border-gray-300 focus:border-black dark:hover:border-gray-600 dark:focus:border-white
                   focus:outline-none focus:shadow-md"
          whileFocus={{ scale: 1.02 }}
          required
        />
        
        <motion.input
          type="email"
          placeholder="Sähköposti"
          className="p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full
                   transition-all duration-200
                   hover:scale-[1.01] focus:scale-[1.02]
                   hover:border-gray-300 focus:border-black dark:hover:border-gray-600 dark:focus:border-white
                   focus:outline-none focus:shadow-md"
          whileFocus={{ scale: 1.02 }}
          required
        />
        
        <motion.textarea
          placeholder="Viesti"
          rows="5"
          className="p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full
                   transition-all duration-200
                   hover:scale-[1.01] focus:scale-[1.02]
                   hover:border-gray-300 focus:border-black dark:hover:border-gray-600 dark:focus:border-white
                   focus:outline-none focus:shadow-md"
          whileFocus={{ scale: 1.02 }}
          required
        />
        
        <motion.button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-lg 
                   text-lg font-medium
                   hover:opacity-90 hover:scale-[1.02]
                   transition-all duration-200"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Lähetä viesti
        </motion.button>
      </form>
    </motion.section>
  );
}