import AboutUs from '@/components/AboutUs'
import ClientHero from '@/components/ClientHero'
import  Navbar from '@/components/Header'
import Pricing from '@/components/Pricing'
import Subscribe from '@/components/Subscribe'
import Testimonials from '@/components/Testimonials'
import Youtube from '@/components/Youtube'
import dynamic from 'next/dynamic'
import Image from 'next/image'

function Home() {
  return (
   <>

   <ClientHero />
   <AboutUs />
   <Testimonials />
   <Pricing />
   <Subscribe />
   <Youtube />
   </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})

