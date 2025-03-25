"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experienceData = [
    {
      company: "Smart Home & Industrial Solutions",
      position: "AIoT Developer Intern",
      period: "May 2024 – July 2024",
      location: "Vijayawada, India",
      description: [
        "Developed a smart home security system using AIoT to enhance home automation and security.",
        "Gained experience in integrating IoT devices with AI technologies.",
      ],
    },
    {
      company: "Edubot Software & Solutions Pvt Ltd",
      position: "Frontend Developer Intern",
      period: "Dec 2024 - Feb 2025",
      location: "Vijayawada, India",
      description: [
        "Developed and optimized frontend pages using ShadCN, Tailwind CSS, TypeScript and Vite.",
        "Collaborated with teams to ensure seamless routing techniques, and improve performance, accessibility, and cross-browser compatibility.",
      ],
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading>Internship Experience</SectionHeading>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {experienceData.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <p className="text-lg font-medium text-primary mt-1">{exp.company}</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-sm">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

