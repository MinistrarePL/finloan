import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Stats } from "@/components/sections/Stats"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { LoanProducts } from "@/components/sections/LoanProducts"
import { Calculator } from "@/components/sections/Calculator"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

export function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <LoanProducts />
        <Calculator />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
