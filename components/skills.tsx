"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Github, Layout, Server, Terminal, Figma } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python", "Java"],
      icon: Code,
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "TypeScript", "Vite", "ShadCN"],
      icon: Layout,
    },
    {
      category: "Backend",
      skills: ["JDBC", "Node.js", "Express.js", "PHP"],
      icon: Server,
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "phpMyAdmin"],
      icon: Database,
    },
    {
      category: "Version Control",
      skills: ["GitHub"],
      icon: Github,
    },
    {
      category: "Design Tools",
      skills: ["Figma", "Canva"],
      icon: Figma,
    },
    {
      category: "Servers",
      skills: ["Apache Net Beans", "XAMPP"],
      icon: Terminal,
    },
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
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading>Technical Skills</SectionHeading>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <skillGroup.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-background rounded-full text-sm border">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

