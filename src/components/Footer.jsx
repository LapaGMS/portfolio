export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        © {new Date().getFullYear()} Rapukeisari. Rakennettu Reactilla ja Tailwindilla 🛠️
      </p>
    </footer>
  );
}
