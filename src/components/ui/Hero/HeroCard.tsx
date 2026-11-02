
import Card from "@/components/ui/Card";

const HeroCard = () => {
  return (
    <Card
      title="Full-stack web developer"
      trailing={
        <span className="text-xl">
          {"</>"}
        </span>
      }
      className="h-full w-full"
    >
      <div className="flex flex-1 flex-col justify-center">

        <h1 className="text-4xl font-medium md:text-8xl">
          John Carlo
          <br />
          Abanes
        </h1>

        <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">
          I build modern web applications, APIs, and digital experiences
          that are fast, scalable, and user-focused.
        </p>

        <div className="mt-14 flex items-end justify-between gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-6 rounded-full bg-[#4169ff] px-6 py-4 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Explore my work
            <span>↗</span>
          </a>

          <p className="hidden text-[10px] uppercase leading-relaxed tracking-[1.5px] text-zinc-500 sm:block">
            Thoughtful by design.
            <br />
            Reliable by default.
          </p>
        </div>

      </div>
    </Card>
  );
};

export default HeroCard;
