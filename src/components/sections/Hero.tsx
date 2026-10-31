
import MainLayout from "../layout/MainLayout";

import HeroCard from "../ui/Hero/HeroCard";
import IntroductionCard from "../ui/Hero/IntroductionCard";
import ProcessCard from "../ui/Hero/ProcessCard";
import ToolkitCard from "../ui/Hero/ToolkitCard";
import ContactCard from "../ui/Hero/ContactCard";

const Hero = () => {
  return (
    <MainLayout>
      <div
        className="
          grid grid-cols-1
          gap-5
          md:grid-cols-2
          lg:grid-cols-12
          lg:auto-rows-auto
        "
      >
        {/* Top Row */}
        <div className="min-w-0 md:col-span-2 lg:col-span-8 lg:min-h-140">
          <HeroCard />
        </div>

        <div className="min-w-0 md:col-span-2 lg:col-span-4 lg:min-h-140">
          <ProcessCard />
        </div>

        {/* Bottom Row */}
        <div className="min-w-0 md:col-span-1 lg:col-span-5 lg:min-h-60">
          <IntroductionCard />
        </div>

        <div className="min-w-0 md:col-span-1 lg:col-span-3 lg:min-h-60">
          <ToolkitCard />
        </div>

        <div className="min-w-0 md:col-span-2 lg:col-span-4 lg:min-h-60">
          <ContactCard />
        </div>
      </div>
    </MainLayout>
  );
};

export default Hero;
