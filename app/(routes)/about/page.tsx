import React from 'react'
import AboutHero from '../../_components/section/AboutHero'
import AboutContent from '@/app/_components/section/AboutContent'
import Services from '@/app/_components/section/Services'
import BacktoHome from '@/app/_components/layout/BacktoHome'

const page = () => {
  return (
    <main>
            <BacktoHome/>
      <AboutHero />
      <AboutContent/>
      <Services/>
    </main>
  )
}

export default page