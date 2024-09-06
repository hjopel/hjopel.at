"use client"

import React from 'react'
import Hero from '@/components/elsp/Hero'
import About from '@/components/elsp/About'
import Accomplishments from '@/components/elsp/Accomplishments'
import TechStack from '@/components/elsp/TechStack'
import Leadership from '@/components/elsp/Leadership'
import CallToAction from '@/components/elsp/CallToAction'
import Footer from '@/components/elsp/Footer'

export default function ELSP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <About />
      <Accomplishments />
      <TechStack />
      <Leadership />
      <CallToAction />
      <Footer />
    </div>
  )
}