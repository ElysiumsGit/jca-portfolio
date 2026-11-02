import React from 'react'
import ProjectCard from '../ui/Projects/ProjectCard'
import MainLayout from '../layout/MainLayout'
import Layout from '../layout/Layout'
import projects from '@/data/BackendProject'
import { BackendProjectCard } from '../ui/Projects/BackendProjectCard'

export const Projects = () => {
  return (
    <MainLayout className="flex flex-col justify-center">
        <Layout
            number="03"
            label="Projects"
            title="Showcasing my work."
            subtitle="A selection of my recent projects, highlighting the skills and technologies I've used to bring ideas to life. Each project represents a unique challenge and the solution I developed."
        >
        
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4 flex">
                <ProjectCard
                title="Orbit — work, in focus."
                category="CONCEPT / PRODUCTIVITY PLATFORM"
                description="A team workspace concept connecting projects, tasks, and progress. Designed around clear priorities, shared context, and a calm daily workflow."
                image="/images/orbit-preview.png"
                technologies={["Next.js", "TypeScript", "PostgreSQL", "Prisma"]}
                scope="INTERFACE · AUTH · ROLE-BASED API · DATA MODEL"
                href="/projects/orbit"
                />
            </div>

            {/* Secondary Project - Forma */}
            <div className="lg:col-span-4 flex">
                <ProjectCard
                title="Forma — less, better."
                category="CONCEPT / COMMERCE EXPERIENCE"
                description="A considered storefront for everyday objects. Product discovery, a persistent cart, and a streamlined checkout in one cohesive experience."
                image="/images/forma-preview.png"
                technologies={["React", "Node.js", "Stripe"]}
                scope="STOREFRONT · CART · CHECKOUT"
                href="/projects/forma"
                />
            </div>
            <div className="lg:col-span-4 flex">
                <ProjectCard
                title="Forma — less, better."
                category="CONCEPT / COMMERCE EXPERIENCE"
                description="A considered storefront for everyday objects. Product discovery, a persistent cart, and a streamlined checkout in one cohesive experience."
                image="/images/forma-preview.png"
                technologies={["React", "Node.js", "Stripe"]}
                scope="STOREFRONT · CART · CHECKOUT"
                href="/projects/forma"
                />
            </div>
        </div>

        <section className="space-y-5 mt-5">
            {projects.map((project) => (
                <BackendProjectCard
                key={project.title}
                {...project}
                />
            ))}
        </section>
        </Layout>
    </MainLayout>
  )
}
