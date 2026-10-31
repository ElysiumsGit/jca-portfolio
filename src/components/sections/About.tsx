
import MainLayout from "../layout/MainLayout";
import Layout from "../layout/Layout";

import MainIntroductionCard from "../ui/About/MainIntroductionCard";
import ApproachCard from "../ui/About/ApproachCard";
import MainCard from "../ui/MainCard";
import cardData from "@/data/CardData";

export const About = () => {
  return (
    <MainLayout className="flex flex-col justify-center">
      <Layout
        number="01"
        label="About Me"
        title="Thoughtful interfaces. Solid foundations."
        subtitle="A considered approach to building for the web, from the first interaction to the last API call."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <MainIntroductionCard />
        </div>

        <div className="min-w-0 lg:col-span-5">
          <ApproachCard />
        </div>
      </div>

      <MainCard cards={cardData} />

    </MainLayout>
  )
}

export default About;
