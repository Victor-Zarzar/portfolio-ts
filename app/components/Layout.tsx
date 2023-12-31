// components/Layout.tsx
import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar theme={""} setTheme={function (value: React.SetStateAction<string>): void {
              throw new Error("Function not implemented.");
          } } />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
