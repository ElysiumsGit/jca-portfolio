
import React, { ReactNode } from "react";

interface CardProps {
  title?: string;
  trailing?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Card = ({
  title,
  trailing,
  children,
  className = "",
}: CardProps) => {
  return (
    <div
      className={`rounded-[28px] border border-[#2c2c2c] bg-[#151515] p-8 md:p-12 ${className}`}
    >
      {/* Header */}
      {(title || trailing) && (
        <div className="mb-12 flex items-center justify-between">
          {title && (
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-zinc-400">
              {title}
            </p>
          )}

          {trailing && (
            <div className="flex items-center justify-center text-zinc-500">
              {trailing}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
};

export default Card;
