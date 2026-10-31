
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const MainLayout = ({
  children,
  className = "",
}: MainLayoutProps) => {
  return (
    <main className="w-full min-h-screen px-6 py-4 md:px-10">
      <div className={`mx-auto w-full max-w-380 ${className}`}>
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
