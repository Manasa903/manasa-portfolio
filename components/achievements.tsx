"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievementsData = [
    "Winners of SMART INDIA HACKATHON 2024 - HARDWARE EDITION",
    "Dr Lakireddy Hanimi Reddy Merit Scholarship - Academic Merit (2022-23)",
    "Dr Lakireddy Hanimi Reddy Merit Scholarship - Academic Merit (2023-24)",
    "Runners in INNOSTES SOLUTIONS PVT LTD HACKATHON - MERN STACK HACKATHON",
    "Top 50 Finalist – My APSSDC, My Website Contest",
  ]

  const certificationsData = [
    { name: "Professional Communication Skills", issuer: "By RIT" },
    { name: "Spoken English Course", issuer: "By BBC Council" },
    { name: "Basic Cybersecurity Course", issuer: "By Capgemini" },
    { name: "Mastering Figma: Beginner to Expert UI/UX Design", issuer: "By GUVI" },
    { name: "C++ Essentials", issuer: "By Cisco" },
    { name: "C Programming", issuer: "By Hackkerank" },
    { name: "Python Programming", issuer: "By Hackkerank" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Achievements & Certifications</SectionHeading>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Achievements</h3>
            <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-4"
            >
              {achievementsData.map((achievement, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p>{achievement}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-4"
            >
              {certificationsData.map((cert, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

