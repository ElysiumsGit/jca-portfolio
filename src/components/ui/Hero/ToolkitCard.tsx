
import {
  Atom,
  Braces,
  Database,
  ArrowUpRight,
} from "lucide-react";

import Card from "@/components/ui/Card";

const ToolkitCard = () => {
  const tools = [
    { icon: Atom, label: "Frontend technologies" },
    { icon: Braces, label: "Development tools" },
    { icon: Database, label: "Database technologies" },
  ];

  return (
    <Card title="My Toolkit" className="h-full w-full">
      <div className="flex flex-1 flex-col">
        {/* Toolkit Icons */}
        <div className="flex items-center gap-2.5">
          {tools.map(({ icon: Icon, label }) => (
            <div
              key={label}
              title={label}
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800"
            >
              <Icon
                size={23}
                strokeWidth={1.7}
                className="text-zinc-100"
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-6">
          <h2 className="text-xl font-medium tracking-tight text-zinc-100">
            Built with purpose.
          </h2>

          <ArrowUpRight
            size={22}
            strokeWidth={1.8}
            className="shrink-0 text-zinc-100 transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1"
          />
        </div>
      </div>
    </Card>
  );
};

export default ToolkitCard;
