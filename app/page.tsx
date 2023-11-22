import AboutUs from '@/components/AboutUs'
import ClientHero from '@/components/ClientHero'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import Subscribe from '@/components/Subscribe'
import Testimonials from '@/components/Testimonials'
import Youtube from '@/components/Youtube'
import dynamic from 'next/dynamic'


function Home() {
  return (
   <>

   <ClientHero />
   <AboutUs />
   <Testimonials />
   <Pricing />
   <Subscribe />
   <Youtube />
   <Footer />
   </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})

