import Introduce from "@/components/Introduce/introduce";
import Layout from "@/components/layout";
import Main from "@/components/Main/main";
import Projects from "@/components/Projects/projects";

export default function Home() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <Main />
        <Introduce />
        <Projects />
      </section>
    </Layout>
  );
}
