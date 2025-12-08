"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { socialLinks } from "@/lib/constants";
import { motion } from "framer-motion";

const socialIcons = [
  { Icon: Github, href: socialLinks.github, label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
  {
    Icon: Linkedin,
    href: socialLinks.linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  { Icon: Mail, href: socialLinks.email, label: "Email", color: "hover:text-green-600 dark:hover:text-green-400" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 bg-gradient-to-b from-transparent to-green-50/30 dark:to-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Portfolio. Made with{" "}
              <motion.span
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <Heart className="w-4 h-4 inline text-red-500" />
              </motion.span>{" "}
              by{" "}
              <span className="gradient-text font-semibold">You</span>
            </p>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2, y: -5, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl glass dark:glass-dark hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
                aria-label={social.label}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-300"
                  initial={false}
                />
                <social.Icon className={`w-5 h-5 text-gray-700 dark:text-gray-300 ${social.color} transition-colors relative z-10`} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
