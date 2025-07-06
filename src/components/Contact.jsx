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
      <h2 className="text-2xl font-bold mb-4">Ota yhteyttä</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-3xl mx-auto">
        <input type="text" placeholder="Nimi" className="p-2 rounded border-2 border-gray-200 dark:border-gray-900" required />
        <input type="email" placeholder="Sähköposti" className="p-2 rounded border-2 border-gray-200 dark:border-gray-900" required />
        <textarea placeholder="Viesti" rows="5" className="p-2 rounded border-2 border-gray-200 dark:border-gray-900" required />
        <button type="submit" className="bg-black text-white dark:bg-white dark:text-black p-2 rounded hover:opacity-80">
          Lähetä
        </button>
      </form>
    </motion.section>
  );
}
