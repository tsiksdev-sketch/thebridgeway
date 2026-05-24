import Gallery from '@/components/home/gallery'
import { Hero } from '@/components/home/hero'
import { Programs } from '@/components/home/programs'
import { Resources } from '@/components/home/resources'
import { Staff } from '@/components/home/staff'
import { Supports } from '@/components/home/supports'
import { Visit } from '@/components/home/visit'
import React from 'react'



function page() {
  return (
    <main > 
        <Hero />
        <Gallery />
        <Programs />
        <Supports />
        <Staff />
        <Resources />
        <Visit />
    </main>
  
  )
}

export default page