import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const LeadershipCard = ({ title, description }: { title: string, description: string }) => (
  <Card className="hover:scale-105 transition-transform duration-300">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
)

export default function Leadership() {
  return (
    <section className="min-h-screen py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">Leadership & Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <LeadershipCard 
          title="Tech & Business Visionary" 
          description="Bridging the gap between technical innovation and business strategy."
        />
        <LeadershipCard 
          title="Startup Savvy" 
          description="Experience in building and scaling startups from the ground up."
        />
        <LeadershipCard 
          title="Natural Leader" 
          description="Inspiring teams to achieve their best through collaborative leadership."
        />
      </div>
    </section>
  )
}