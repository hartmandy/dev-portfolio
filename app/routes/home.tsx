import { Hero } from "~/components/hero";
import { WorkSection } from "~/components/work-section";
import { ProjectsSection } from "~/components/projects-section";
import { OtherProjectsSection } from "~/components/other-projects-section";
import { ContactSection } from "~/components/contact-section";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mandy Hartman | Software Engineer" },
    { name: "description", content: "Mandy Hartman | Software Engineer" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WorkSection />
      <ProjectsSection />
      <OtherProjectsSection />
      <ContactSection />
    </div>
  );
}
