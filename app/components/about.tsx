"use client";
import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/vinisadev",
      icon: <FaTwitter className="text-white text-lg" />
    },
    {
      name: "GitHub",
      url: "https://github.com/vinisadev",
      icon: <FaGithub className="text-white text-lg" />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vincenzo-fehring",
      icon: <FaLinkedin className="text-white text-lg" />
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@vinisadev",
      icon: <FaYoutube className="text-white text-lg" />
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.7,
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
        delay: 0.8 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.9 },
  };

  const verifiedBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1, 1.2, 1],
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <motion.div
      className="px-4 py-6 space-y-4 mx-auto w-full max-w-2xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <motion.h2
            className={`${
              isMobile ? "text-4xl" : "text-6xl"
            } font-bold text-white`}
            variants={nameVariants}
          >
            Vincenzo Fehring
          </motion.h2>
          <motion.div variants={verifiedBadgeVariants}>
            <MdVerified className="text-blue-500 text-xl" />
          </motion.div>
        </div>
        {/* <motion.p className="text-sm text-gray-400" variants={itemVariants}>
          React • Linux • Golang • building{" "}
          <Link
            href="https://x.com/vinisadev"
            className="text-blue-400 hover:underline"
          >
            @VinIsADev
          </Link>
        </motion.p> */}
        <motion.p
          className="text-sm text-muted-foreground"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.7,
              ease: "easeOut" as const,
            },
          }}
        >
          Softare Engineer at <Link className="text-blue-400" href="https://cleartalk.ai">ClearTalk.ai</Link>.
          Skilled in React, Go, and Linux Systems. I believe in creating solutions that are fast, reliable,
          and built to make a difference. When I feel like sharing my knowledge I write{" "}
          {/* <Link className="text-blue-400" href={""}>
            @blogs
          </Link> */}
        </motion.p>
        <p className="text-muted-foreground text-sm">
          In my free time, you can find me playing{" "}
          <a href="https://dungeonsanddragons.com" className="text-blue-400">Dungeons & Dragons</a>{" "}
          , cooking, watching movies or trying something new either in tech or in life.
        </p>
        <p className="text-muted-foreground text-sm">
          If you love reading blogs, then I write{" "}
          <a href="" className="text-blue-400">
            @blogs
          </a>{" "}
          sometimes related to development or the fun things I try.
        </p>
      </motion.div>
      <div className="mt-5 flex gap-3">
        <div className="text-xs bg-card px-4 py-2 border flex rounded-md cursor-pointer items-center gap-2">
          <span className="relative flex size-3">
            {" "}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>{" "}
            <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
          </span>
          Not currently available for new opportunities
        </div>
        <div className="text-xs bg-card px-4 py-2 border flex rounded-md cursor-pointer items-center gap-2">
          <Download size={15} />
          Download Resume
        </div>
      </div>
      <Separator />
      <motion.div
        className="flex flex-wrap gap-3 pt-2 mt-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            custom={index}
            variants={socialIconVariants}
          >
            <Link
              href={social.url}
              className="p-2.5 rounded-md transition-colors inline-block bg-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}