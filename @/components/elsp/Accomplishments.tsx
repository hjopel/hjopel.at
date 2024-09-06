import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Cloud, Building } from 'lucide-react'

const TimelineItem = ({ icon: Icon, title, subtitle, date, description }: {
  icon: React.ElementType,
  title: string,
  subtitle: string,
  date: string,
  description: string
}) => (
  <Card className="mb-8">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="bg-primary rounded-full p-2">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <div>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="ml-auto text-sm text-muted-foreground">{date}</div>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
)

export default function Accomplishments() {
  return (
    <section className="min-h-screen py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">My Journey</h2>
      <div className="space-y-8">
        <TimelineItem
          icon={Cloud}
          title="Joined Captic"
          subtitle="Vienna, Austria"
          date="2021 - present"
          description="Leading cloud-native development and DevOps practices"
        />
        <TimelineItem
          icon={Building}
          title="Tech Lead at RMA"
          subtitle="Vienna, Austria"
          date="2019 - 2021"
          description="Spearheaded digital transformation initiatives"
        />
        <TimelineItem
          icon={GraduationCap}
          title="Developed admissio.at"
          subtitle="Vienna, Austria"
          date="2018"
          description="Created an innovative platform for university admissions"
        />
      </div>
    </section>
  )
}