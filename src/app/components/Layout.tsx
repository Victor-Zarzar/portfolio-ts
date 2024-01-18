'use client'
import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle, DefaultTheme } from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from "./Header";
import Skills from "./Skills";
import { usePathname } from 'next/navigation';
import Projects from "./Projects";
interface ThemeProps {
    body: string;
}

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme }) => theme.body};
  }`;

export default function Layout({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");

    const light: ThemeProps = {
        body: "#E2E2E2"
    };
    const dark: ThemeProps = {
        body: "#111827"
    };

    const pathname = usePathname();
    const showSkills = pathname === "/";
    const showHeader = pathname === "/";
    const showProjects = pathname === "/";

    return (
        <ThemeProvider theme={theme === "dark" ? light : dark}>
            <GlobalStyle theme={theme === "dark" ? light : dark} />
            <Navbar theme={theme} setTheme={setTheme} />
            {showHeader && <Header />}
            {children}
            {showSkills && <Skills theme={theme} />}
            {showProjects && <Projects theme={theme} />}
            <Footer theme={theme} />
        </ThemeProvider>
    );
}

