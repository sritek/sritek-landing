"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";
import CTA from "@/components/ui/CTA";

export default function OurWork() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardsRef.current) return;
    gsap.from(cardsRef.current.querySelectorAll(".project-card"), {
      clipPath: "inset(100% 0 0 0)",
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
    });
  }, []);

  return (
    <section className="bg-dark-surface py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <h2 className="font-canela text-[8vw] text-blue font-light leading-none mb-12 lg:mb-16">
          OUR WORK
        </h2>
        <div ref={cardsRef} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {projects.slice(0, 2).map((p, i) => (
              <div key={p.slug} className={`project-card ${i === 0 ? "lg:col-span-2" : "lg:col-span-3"}`}>
                <ProjectCard
                  category={p.category}
                  title={p.title}
                  description={p.description}
                  href={`/projects/${p.slug}`}
                  imagePlaceholderColor={p.imageColor}
                />
              </div>
            ))}
          </div>
          {projects[2] && (
            <div className="project-card">
              <ProjectCard
                category={projects[2].category}
                title={projects[2].title}
                description={projects[2].description}
                href={`/projects/${projects[2].slug}`}
                imagePlaceholderColor={projects[2].imageColor}
              />
            </div>
          )}
        </div>
        <div className="flex justify-center mt-12">
          <CTA variant="outline" label="SHOW MORE" href="/projects" />
        </div>
      </div>
    </section>
  );
}
