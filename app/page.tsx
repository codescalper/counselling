import AboutUs from '@/components/AboutUs'
import ClientHero from '@/components/ClientHero'
import  Navbar from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import Youtube from '@/components/Youtube'
import dynamic from 'next/dynamic'
import Image from 'next/image'

function Home() {
  return (
   <>
   <Navbar />
   <ClientHero />
   <AboutUs />
   <Subscribe />
   <Youtube />
   </>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})

