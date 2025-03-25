"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projectsData = [
    {
      title: "URVERSE - A Movie Ticket Booking Website",
      description: [
        "Developed a user-friendly platform for booking tickets for movies, concerts, and shows, integrating various discount coupons and payment options for a seamless experience.",
        "Designed a secure and efficient SQL-based backend using Java API and JDBC to manage user data, transactions, and booking history.",
      ],
      technologies: ["Java API", "JDBC", "SQL"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "College ERP Portal",
      description: [
        "Built a comprehensive ERP system for students and faculty, enhancing academic and administrative functionalities such as attendance tracking, grade management, and notifications.",
        "Implemented a responsive UI using React.js and Bootstrap, with a secure backend in Node.js and Express.js, ensuring efficient data handling with MongoDB.",
      ],
      technologies: ["React JS", "Node JS", "Express JS", "MongoDB", "Bootstrap"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Blood Group Recognition through Fingerprint",
      description: [
        "Developed an IoT-based system integrating a fingerprint sensor with a deep learning model to accurately predict blood groups, improving accessibility to blood type identification.",
        "Designed a Flask API to process fingerprint images and interface with the hardware prototype, ensuring real-time blood group recognition and result display.",
      ],
      technologies: ["IoT", "Deep Learning", "Flask API", "Hardware Prototype"],
      image: "/placeholder.svg?height=200&width=400",
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>Projects</SectionHeading>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-4">
                    {project.description.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

