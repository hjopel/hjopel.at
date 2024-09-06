import React from 'react'
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Add parallax layers here */}
      </div>
      <div className="z-10 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Collaborate?</h2>
        <Button size="lg" className="animate-pulse">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}