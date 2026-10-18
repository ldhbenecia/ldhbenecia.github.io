import { Footer } from '@/components/layout/Footer'
import { Nav } from '@/components/layout/Nav'
import { About } from '@/components/sections/About'
import { AiPractices } from '@/components/sections/AiPractices'
import { Contact } from '@/components/sections/Contact'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Impact } from '@/components/sections/Impact'
import { ProjectIndex } from '@/components/sections/ProjectIndex'
import { Projects } from '@/components/sections/Projects'
import { QueryRace } from '@/components/sections/QueryRace'
import { Lightbox } from '@/components/ui/Lightbox'

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <QueryRace />
        <Impact />
        <AiPractices />
        <Experience />
        <section id="projects" aria-label="프로젝트">
          <ProjectIndex />
          <Projects />
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
      <Lightbox />
    </>
  )
}
