"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { School, Calendar } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      institution: "Lakireddy Bali Reddy College Of Engineering",
      degree: "Bachelor of Technology in Information Technology",
      period: "August 2022 - June 2026",
      grade: "CGPA: 9.65",
      icon: School,
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate, MPC",
      period: "August 2020 - April 2022",
      grade: "Percentage: 98.4%",
      icon: School,
    },
    {
      institution: "Narayana e-techno School",
      degree: "SSC",
      period: "March 2019 - March 2020",
      grade: "Percentage: 98%",
      icon: School,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Education</SectionHeading>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {educationData.map((edu, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <edu.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{edu.institution}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">{edu.degree}</p>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{edu.grade}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

