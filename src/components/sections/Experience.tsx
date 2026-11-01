
import MainLayout from "../layout/MainLayout";
import Layout from "../layout/Layout";

import { ExperienceIntroCard } from "../ui/Experience/ExperienceIntroCard";
import { ExperienceCard } from "../ui/Experience/ExperienceCard";
import { ExperienceFooterCard } from "../ui/Experience/ExperienceFooterCard";

export const Experience = () => {
  return (
    <MainLayout className="flex flex-col justify-center">
      <Layout
        number="02"
        label="Experience"
        title="The journey behind the craft."
        subtitle="A brief overview of my professional experience, including roles, responsibilities, and contributions. This section highlights the work I've done and the impact I've made in various positions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 items-stretch">
        <ExperienceIntroCard />
        <ExperienceCard />
      </div>

      <div className="hidden lg:block">
        <ExperienceFooterCard />
      </div>  

    </MainLayout>
  )
}

export default Experience;
