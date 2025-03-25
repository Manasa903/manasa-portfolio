"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeading from "./section-heading"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg text-muted-foreground mb-6">
            I am a passionate MERN stack developer currently pursuing my Bachelor of Technology in Information
            Technology at Lakireddy Bali Reddy College Of Engineering, maintaining a CGPA of 9.65.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            With expertise in web development and IoT-based applications, I am dedicated to creating innovative
            solutions that leverage AI, deep learning, and hardware integration. My academic excellence is complemented
            by practical experience gained through internships and hands-on projects.
          </p>
          <p className="text-lg text-muted-foreground">
            I am seeking opportunities to contribute my technical skills to impactful projects and continue growing as a
            developer in the rapidly evolving tech landscape.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

