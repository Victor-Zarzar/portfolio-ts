'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { useState } from "react";
import { ThemeProvider, createGlobalStyle, DefaultTheme } from "styled-components";

const inter = Inter({ subsets: ['latin'] });

interface ThemeProps {
  body: string;
}

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme }) => theme.body};
  }`;

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [theme, setTheme] = useState("light");

  const light: ThemeProps = {
    body: "#E2E2E2"
  };
  const dark: ThemeProps = {
    body: "#111827"
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme === "light" ? dark : light}>
          <GlobalStyle theme={theme === "light" ? dark : light} />
          <Navbar theme={theme} setTheme={setTheme} />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}