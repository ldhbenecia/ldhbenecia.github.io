import Layout from "@/components/layout";
import Main from "@/components/Main/main";

export default function Home() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <Main />
      </section>
    </Layout>
  );
}
