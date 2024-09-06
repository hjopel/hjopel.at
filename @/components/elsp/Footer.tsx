import React from 'react'
import { Linkedin, Github, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto flex justify-center space-x-8">
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors duration-300">
          <Linkedin />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition-colors duration-300">
          <Github />
        </a>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-green-500 transition-colors duration-300">
          <Globe />
        </a>
      </div>
    </footer>
  )
}