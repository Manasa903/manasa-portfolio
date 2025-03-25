"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 px-4 sm:px-6">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 max-w-3xl mx-auto"
      >
        <div className="mb-6 relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary">
          <Image src="/manasa.jpg" height={128} width={128}  alt="Batchu Manasa" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-foreground">Batchu Manasa</h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">MERN Stack Developer | AIoT Enthusiast</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          A skilled MERN stack developer with expertise in web and IoT-based applications. Passionate about leveraging
          AI, deep learning, and hardware integration.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild variant="default">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/manasa-batchu-45abb12a8" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:manasabatchu09@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}

