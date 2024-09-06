import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white py-12 px-4">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-blue-600">About Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/path-to-your-image.jpg"
              alt="Jan Hoppel"
              width={250}
              height={250}
              className="rounded-full border-4 border-blue-500 shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              As an entrepreneurial full-stack engineer, I've dedicated my career to transforming innovative ideas into robust, scalable solutions. With a strong foundation in both technical expertise and business acumen, I bring a unique perspective to every project I undertake.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My passion lies in creating efficient, user-centric applications that solve real-world problems. I thrive in dynamic environments where I can leverage my skills in frontend and backend development, as well as my experience with cloud technologies and DevOps practices.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}