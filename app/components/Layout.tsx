'use client'
import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle, DefaultTheme } from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

    return (
        <ThemeProvider theme={theme === "light" ? dark : light}>
            <GlobalStyle theme={theme === "light" ? dark : light} />
            <Navbar theme={theme} setTheme={setTheme} />
            {children}
            <Footer />
        </ThemeProvider>
    )
}