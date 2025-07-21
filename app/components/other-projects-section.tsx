import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface OtherProject {
  title: string;
  organization: string;
  description: string;
  year: string;
  type: string;
  link?: string;
  image: string;
}

const otherProjects: OtherProject[] = [
  {
    title: "Interactive Museum Timeline",
    organization: "Local History Museum",
    description:
      "Designed and developed an interactive digital timeline showcasing 200 years of local history with multimedia content.",
    year: "2020",
    type: "Digital Exhibition",
    image: "/example.jpg",
  },
  {
    title: "Virtual Gallery Experience",
    organization: "Art Museum",
    description:
      "Created immersive virtual tour experience allowing remote visitors to explore collections with 360° photography.",
    year: "2021",
    type: "Virtual Experience",
    image: "/example.jpg",
  },
  {
    title: "Digital Archive Project",
    organization: "University Museum",
    description:
      "Digitized and catalogued historical documents, creating searchable database for researchers and public access.",
    year: "2019",
    type: "Digital Archive",
    image: "/example.jpg",
  },
  // Add your actual museum projects here
];

export function OtherProjectsSection() {
  return (
    <section className="mt-32 ml-10 mr-10 max-w-7xl">
      <div className="mb-12 text-right">
        <h2 className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-400 mb-2">
          Other Digital Work
        </h2>
        <p className="text-neutral-500 dark:text-neutral-500 text-sm md:text-base">
          Museum & cultural projects from my previous career
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-md"
          >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
              />
            </div>

            {/* Content Section */}
            <div className="p-5">
              <div className="mb-3">
                <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 mb-1 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 font-medium">
                  {project.organization}
                </p>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200"
                >
                  <ExternalLinkIcon className="h-3 w-3" />
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
