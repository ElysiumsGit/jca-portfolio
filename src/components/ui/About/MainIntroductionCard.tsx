
import React from "react";
import Card from "../Card";

const MainIntroductionCard = () => {
  return (
    <Card
      title="Hello, I'm John Carlo."
      className="h-full"
    >
      <div className="space-y-5">
        <h3 className="text-xl md:text-2xl leading-relaxed tracking-tight text-zinc-100">
          I care about what happens on both sides of the screen: the
          experience people use and the systems that make it possible.
        </h3>

        <p className="text-sm md:text-base leading-relaxed text-zinc-400">
          For me, full-stack development is about connecting the
          details. Clear interfaces, well-structured APIs, and
          maintainable code should work together—not compete. The goal
          is simple: useful software that feels effortless.
        </p>
      </div>
    </Card>
  );
};

export default MainIntroductionCard;