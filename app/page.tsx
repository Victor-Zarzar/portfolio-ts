'use client';
import { Footer } from "./components/Footer";
import { useState } from "react";
import { ThemeProvider, createGlobalStyle, DefaultTheme } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Location from "./components/pages/Location";
import Skills from "./components/pages/Skills";
interface ThemeProps {
  body: string;
}

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme }) => theme.body};
  }`;

export default function App() {

  const [theme, setTheme] = useState("light");

  const light: ThemeProps = {
    body: "#E2E2E2"
  };
  const dark: ThemeProps = {
    body: "#111827"
  };

  return (
    <main>
      <ThemeProvider theme={theme === "light" ? dark : light}>
        <GlobalStyle theme={theme === "light" ? dark : light} />
        <Navbar theme={theme} setTheme={setTheme} />
        <Home />
        <Skills />
        <Location />
        <Footer />
      </ThemeProvider>
    </main>
  )
}