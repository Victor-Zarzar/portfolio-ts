'use client';
import React, { useState } from "react";
import Layout from "../components/Layout";
import Projects from "../pages/Projects";

const ProjectsPage: React.FC = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Layout theme={theme} setTheme={setTheme}>
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;