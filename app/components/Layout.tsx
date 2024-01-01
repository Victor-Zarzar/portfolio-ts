import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Layout: React.FC<LayoutProps> = ({ theme, setTheme, children }) => {
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
