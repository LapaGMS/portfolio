export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        © {new Date().getFullYear()} Lassi Määttä. Rakennettu Reactilla ja Tailwindilla.
        <button 
          onClick={scrollToTop}
          className="ml-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          aria-label="Siirry sivun ylälaitaan"
        >
          ↑
        </button>
      </p>
    </footer>
  );
}