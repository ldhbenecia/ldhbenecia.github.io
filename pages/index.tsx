import React from "react";

import Introduce from "@/components/Introduce/introduce";
import Layout from "@/components/layout";
import Main from "@/components/Main/main";
import Projects from "@/components/Projects/projects";
import Header from "@/components/Header/header";

const Home: React.FC = () => {
  const mainRef = React.useRef<HTMLDivElement>(null);
  const introRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <Header mainRef={mainRef} introRef={introRef} projectsRef={projectsRef} />
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <Main mainRef={mainRef} />
        <Introduce introRef={introRef} />
        <Projects projectsRef={projectsRef} />
      </section>
    </Layout>
  );
};

export default Home;