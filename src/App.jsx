import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { PortfolioSection } from './components/PortfolioSection'
import { ServicesSection } from './components/ServicesSection'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

function App() {
  return (
    <>
      <a className="skip-link" href="#inicio">
        Saltar para o conteúdo
      </a>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
