import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

interface WorkItem {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  period: string;
  image: string;
  link?: string;
  github?: string;
}

const workItems: WorkItem[] = [
  {
    title: "Mobile Trading Platform",
    company: "Sports Card Investor",
    description: "Built responsive mobile-first trading interface with real-time market data and portfolio management. Led design and development.",
    technologies: ["React Native", "TypeScript", "WebSocket", "Redux"],
    period: "2023 - Present",
    image: "/example.jpg",
  },
  {
    title: "E-commerce Dashboard",
    company: "Previous Company",
    description: "Developed admin dashboard with analytics, inventory management, and real-time order tracking.",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    period: "2022 - 2023",
    image: "/example.jpg",
  },
  {
    title: "Customer Portal",
    company: "Another Company", 
    description: "Created customer-facing portal with account management, billing, and support ticket system.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
    period: "2021 - 2022",
    image: "/example.jpg",
  },
  // Add your actual work items here
];

export function WorkSection() {
  return (
    <section className="mt-20 ml-10 mr-10 max-w-7xl">
      <h2 className="text-2xl md:text-4xl font-bold mb-12 text-neutral-800 dark:text-neutral-200 text-right">
        Professional Work
      </h2>
      
      <div className="space-y-8">
        {workItems.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-gray-900 transition-all duration-500 hover:shadow-xl hover:scale-[1.01] hover:border-sky-300 dark:hover:border-sky-600 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } flex flex-col lg:flex`}
          >
            {/* Image Section */}
            <div className="lg:w-2/5 relative overflow-hidden">
              <div className="aspect-video lg:aspect-square relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
            </div>
            
            {/* Content Section */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-sky-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wide mb-2">
                  {item.company}
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors duration-300 mb-4">
                  {item.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-medium hover:bg-sky-200 dark:hover:bg-sky-800/50 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    View Project
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    className="flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <GitHubLogoIcon className="h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
            
            {/* Subtle animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-blue-50/50 dark:from-sky-950/10 dark:to-blue-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}