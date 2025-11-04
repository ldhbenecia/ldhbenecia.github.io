import { ThemeProvider } from '../components/ThemeProvider'
import { Navigation } from '../components/Navigation'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { EducationSection } from '../components/EducationSection'
import { Footer } from '../components/Footer'

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}