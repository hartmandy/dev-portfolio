import { Hero } from "~/components/hero";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mandy Hartman | Software Engineer" },
    { name: "description", content: "Mandy Hartman | Software Engineer" },
  ];
}

export default function Home() {
  return <Hero />;
}
