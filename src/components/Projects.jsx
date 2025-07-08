import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  const [selectedTags, setSelectedTags] = useState([]);
  
  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project => 
        selectedTags.every(tag => project.tags.includes(tag))
      );

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Projektit</h2>
      
      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-4xl mx-auto">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-violet-900 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="px-3 py-1 rounded-full text-sm bg-violet-900 dark:bg-violet-900 text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500"
          >
            Tyhjennä suodatus
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
          Ei projekteja valituilla suodattimilla.
        </p>
      )}
    </section>
  );
}