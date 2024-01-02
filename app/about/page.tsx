'use client';
import React, { useState } from "react";
import Layout from "../components/Layout";
import About from "../pages/About";

const AboutPage: React.FC = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <About/>
    </Layout>
  );
};

export default AboutPage;