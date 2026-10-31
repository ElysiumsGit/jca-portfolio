
import Card from "@/components/ui/Card";

const IntroductionCard = () => {
  return (
    <Card
      title="A Little About Me"
      className="h-full w-full"
    >
      <div className="flex flex-1 flex-col justify-center">

        <h1 className="text-3xl font-medium md:text-3xl">
          A Developer's Logic
          <br />
          A Designer's Eye
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">
          Building on the way it works and on the way it feels.
        </p>
      </div>
    </Card>
  );
};

export default IntroductionCard;
