import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries/en";

interface WorkProps {
  dict: Dictionary;
}

export default function Work({ dict }: WorkProps) {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-medium tracking-widest uppercase text-center mb-3">
          {dict.work.tag}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {dict.work.title}
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
          {dict.work.subtitle}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {dict.work.projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-card border border-white/5 rounded-xl overflow-hidden hover:border-accent/20 transition-all duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:text-accent-dark transition-colors">
                  {dict.work.visit}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
