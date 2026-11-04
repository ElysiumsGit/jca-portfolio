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
                    title="DocuManage — document management simplified."
                    category="CONCEPT / PRODUCTIVITY TOOL"
                    description="A document management platform designed to streamline notarial workflows. It enables notaries to organize client records and documents, manage notarization requests, track document status, schedule notarization sessions, and monitor the progress of notarial transactions from request to completion."
                    image="/images/documanage.png"
                    technologies={["Flutter", "Supabase", "Node.js"]}
                    scope="WORKSPACE · TASKS · PROGRESS"
                    href="https://document-management-821fe.web.app/?fbclid=IwY2xjawVWXRFleHRuA2FlbQIxMABwZG9mBWJyaWQRMWkyTDBNMnZWRkpQbjd1cXZzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEff9Y16oUMrIkDI_nfNqtBNeSPysC8fztYtbSDLtLNog-eSZtKgMIeRV-tFyc_aem_z6af-RTYStvisgt0UbiFVQ#/login"
                    type="desktop"
                />
            </div>

            {/* Secondary Project - Forma */}
            <div className="lg:col-span-4 flex">
                <ProjectCard
                    title="Storewatch — a considered storefront for everyday objects."
                    category="CONCEPT / COMMERCE EXPERIENCE"
                    description="StoreWatch gives brands, merchandisers, and field teams real-time visibility into store execution, inventory levels and attendance — all in one mobile-first platform."
                    image="/images/storewatch.png"
                    technologies={["Flutter", "Firebase", "Express.js"]}
                    scope="INVENTORY · ATTENDANCE · REPORTING"
                    href="https://storewatch.praetorianintel.com/"
                    type="mobile"
                />
            </div>
            <div className="lg:col-span-4 flex">
                <ProjectCard
                    title="Popina"
                    category="RESTAURANT MANAGEMENT PLATFORM"
                    description="An all-in-one restaurant management platform designed to streamline daily operations. Features include queue management, food inventory tracking, table management, reservations, and dynamic marketing tools to improve customer engagement and restaurant efficiency."
                    image="/images/popina.png"
                    technologies={["Flutter", "MySQL", "Node.js"]}
                    scope="QUEUEING · INVENTORY · RESERVATIONS · TABLE MANAGEMENT · MARKETING"
                    href="/projects/popina"
                    type="tablet"
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
