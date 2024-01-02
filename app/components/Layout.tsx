import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { ThemeProvider, createGlobalStyle, DefaultTheme } from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme }) => theme.body};
  }
`;

const lightTheme: DefaultTheme = {
  body: "#E2E2E2",
};

const darkTheme: DefaultTheme = {
  body: "#111827",
};

const Layout: React.FC<LayoutProps> = ({ theme, setTheme, children }) => {
  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <GlobalStyle theme={theme === "light" ? darkTheme : lightTheme} />
      <div>
        <Navbar theme={theme} setTheme={setTheme} />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
