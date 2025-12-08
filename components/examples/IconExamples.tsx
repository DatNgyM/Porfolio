"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, Github, Linkedin, Twitter, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function IconExamples() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold">Icon Examples</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">React Icons</h3>
        <div className="flex gap-4">
          <FaGithub className="w-8 h-8" />
          <FaLinkedin className="w-8 h-8" />
          <FaTwitter className="w-8 h-8" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Lucide React</h3>
        <div className="flex gap-4">
          <Github className="w-8 h-8" />
          <Linkedin className="w-8 h-8" />
          <Twitter className="w-8 h-8" />
          <Mail className="w-8 h-8" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Animated Icons</h3>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Heart className="w-8 h-8 text-red-500" />
        </motion.div>
      </div>
    </div>
  );
}

