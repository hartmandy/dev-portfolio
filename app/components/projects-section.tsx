import {
  ExternalLinkIcon,
  GitHubLogoIcon,
  StarIcon,
} from "@radix-ui/react-icons";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  demoText?: string; // Custom text for demo button (defaults to "Demo" or "Live Demo")
  featured?: boolean;
  image: string;
}

const projects: Project[] = [
  {
    title: "Paw Profile - Your Pet's Health Companion",
    description:
      "Solo-developed mobile app helping pet owners track veterinary visits, medications, and milestones with secure record storage for emergencies and relocations.",
    technologies: ["React Native", "TypeScript", "Firebase", "i18n"],
    demo: "https://www.pawprofile.app/",
    demoText: "Download App",
    featured: true,
    image: "/pet.png",
  },
  // {
  //   title: "Recipe Finder",
  //   description:
  //     "Smart recipe discovery app with dietary filters, meal planning, and grocery list generation.",
  //   technologies: ["Vue.js", "Node.js", "MongoDB", "Spoonacular API"],
  //   github: "https://github.com/hartmandy/recipe-finder",
  //   demo: "https://recipe-finder-app.vercel.app",
  //   image: "/example.jpg",
  // },
  // {
  //   title: "Code Snippet Manager",
  //   description:
  //     "Developer tool for organizing, searching, and sharing code snippets with syntax highlighting and tagging.",
  //   technologies: ["React", "Express.js", "PostgreSQL", "Prism.js"],
  //   github: "https://github.com/hartmandy/snippet-manager",
  //   image: "/example.jpg",
  // },
  // {
  //   title: "Habit Tracker",
  //   description:
  //     "Minimalist habit tracking app with streak counters, progress visualization, and motivational insights.",
  //   technologies: ["React Native", "Firebase", "Chart.js", "Expo"],
  //   github: "https://github.com/hartmandy/habit-tracker",
  //   image: "/example.jpg",
  // },
  // Add your actual projects here
];

export function ProjectsSection() {
  return (
    <section className="mt-20 ml-10 mr-10 max-w-7xl">
      <div className="mb-16 text-right">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          Personal Projects
        </h2>
      </div>

      {/* Featured Project */}
      {projects
        .filter((p) => p.featured)
        .map((project, index) => (
          <div key={index} className="mb-16">
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-sky-950/40 dark:via-gray-900 dark:to-blue-950/40 border border-sky-200 dark:border-sky-800 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.01]">
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-sky-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                <StarIcon className="h-4 w-4" />
                Featured Project
              </div>

              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                  <div className="aspect-video lg:aspect-square relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/80 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium border border-neutral-200 dark:border-neutral-600 hover:bg-sky-100 dark:hover:bg-sky-900/30 hover:text-sky-700 dark:hover:text-sky-300 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-xl font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 hover:scale-105"
                      >
                        <GitHubLogoIcon className="h-5 w-5" />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105"
                      >
                        <ExternalLinkIcon className="h-5 w-5" />
                        {project.demoText || "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Other Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects
          .filter((p) => !p.featured)
          .map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-neutral-200 dark:border-neutral-700 hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-500 hover:shadow-xl hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 hover:scale-105"
                    >
                      <GitHubLogoIcon className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-1.5 px-4 py-2 border border-sky-300 dark:border-sky-600 text-sky-700 dark:text-sky-400 rounded-lg text-sm font-medium hover:bg-sky-50 dark:hover:bg-sky-950/30 transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      {project.demoText || "Demo"}
                    </a>
                  )}
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
      </div>
    </section>
  );
}
