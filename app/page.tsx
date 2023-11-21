import AboutUs from '@/components/AboutUs'
import ClientHero from '@/components/ClientHero'
import  Navbar from '@/components/Header'
import Youtube from '@/components/Youtube'
import dynamic from 'next/dynamic'
import Image from 'next/image'

function Home() {
  return (
   <>
   <Navbar />
   <ClientHero />
   <AboutUs />
   <Youtube />
   </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})

