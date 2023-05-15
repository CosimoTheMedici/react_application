import React from 'react'
import { About,  Contact, WhyUS, CTA, Clients, FAQ,  Footer,Preloader, Header, Hero,  Newsletter,  Portfolio,  Pricing,  Services, Skills,  Team } from '../components'

const MainPage = () => {
  return (
    <>
        <Header />
        <Hero />
        <main id="main">
        <Clients/>
        <About />
        <WhyUS/>
        <Skills/>
        <Services/>
        <CTA />
        <Portfolio />
        <Team />
        <Pricing />
        <FAQ/>

        {/* <Projects/>
        <Recommendation/> */}
        
        <Contact/>
        <Newsletter/>
        </main>
        <Footer/>
        <Preloader/>

    </>
  )
}

export default MainPage