export default function ProjectCard({ title, description, date, link, link_source, tags }) {
  return (
    <div className="bg-violet-200 dark:bg-violet-950 shadow-md rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300 mb-4 flex-grow">{date}</p>
      <p className="mt-2 text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      
      {/* Tagit */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags?.map((tag, index) => (
          <span 
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-violet-300 dark:bg-violet-900 text-violet-800 dark:text-violet-200"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3 mt-auto">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition-colors duration-300 inline-flex items-center"
          >
            Katso projekti
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        
        {link_source && (
          <a
            href={link_source}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300 inline-flex items-center"
          >
            Lähdekoodi
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}