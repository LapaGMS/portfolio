export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
      >
        Katso projekti →
      </a>
    </div>
  );
}

