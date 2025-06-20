// src/pages/Introduction.jsx

import React from "react";
import { Facebook, Linkedin, Figma, ArrowRight, Github } from "lucide-react";

const Introduction = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-6 flex items-center justify-between z-50">
        {/* Logo - Top Left */}
        <div className="absolute top-6 left-6">
          <img
            src={`${import.meta.env.BASE_URL}JSN-logo.png`}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Social Icons - Center */}
        <div className="flex justify-center w-full">
          <div className="flex items-center gap-6 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-lg">
            <a
              href="https://www.facebook.com/Sonmn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/jason-sullano-b84336337/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
            </a>

            <a
              href="https://www.figma.com/@volcanorc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figma className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/volcanorc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
            </a>
            <a
              href="https://ph.jobstreet.com/profile/jason-sullano-rJGVjS9XCs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowRight className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20 pt-50">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between max-w-4xl mx-auto gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-balance">
              Hi, I'm Jason
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-12 text-balance">
              I Code What Matters
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              {/* Hire Now Button */}
              <button className="border border-white text-white hover:bg-white hover:text-gray-500 px-8 py-3 text-lg font-medium rounded">
                Hire Now
              </button>

              {/* Open Resume Button using button */}
              <button
                className="border border-white text-white hover:bg-white hover:text-gray-500 px-8 py-3 text-lg font-medium rounded"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1cSmHUq0Bo8o_VzeZ9I9zBlIyDfiSW7dq/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Open Resume
              </button>
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                I create cohesive design systems that balance aesthetics and
                functionality. building scalable, adaptable interfaces where
                every component is crafted for clarity, consistency, and a
                seamless user experience
              </p>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative mx-auto">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800">
                <img
                  src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
                  alt="Jason's profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Introduction;
