export function ContactSection() {
  return (
    <section className="mt-32 mb-20">
      {/* Subtle divider with animated dots */}
      <div className="max-w-4xl mx-auto mb-20 flex items-center justify-center">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent flex-1" />
        <div className="mx-4 flex gap-2">
          <div
            className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="w-2 h-2 bg-sky-600 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent flex-1" />
      </div>

      {/* Email section */}
      <div className="text-center px-10">
        <div className="group">
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-neutral-800 dark:text-neutral-200 tracking-tight leading-relaxed">
            let's build something together
          </p>
          <div className="mt-8">
            <a
              href="mailto:mandyhartmandev@gmail.com"
              className="inline-block text-xl md:text-2xl lg:text-3xl font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-all duration-300 hover:scale-105 underline decoration-2 underline-offset-8 decoration-sky-300 dark:decoration-sky-600 hover:decoration-sky-500 dark:hover:decoration-sky-400"
            >
              mandyhartmandev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
