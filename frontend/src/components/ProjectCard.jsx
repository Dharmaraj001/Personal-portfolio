// File: src/components/ProjectCard.jsx

import React from "react";
import { Globe, Github, ArrowRight } from "lucide-react";

const ProjectCard = ({
  image,
  title,
  description,
  tech,
  live,
  github,
  status
}) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition group">

      {/* Top Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-101 transition duration-400"
        />
      </div>

      {/* Bottom Content */}
      <div className="p-6">

        {/* Title + Icons */}
        <div className="flex justify-between items-start mb-3">

          <h3 className="text-2xl font-semibold text-white">
            {title}
          </h3>

          <div className="flex gap-3">

            <a href={live} target="_blank">
              <Globe className="w-5 h-5 text-zinc-400 hover:text-white" />
            </a>

            <a href={github} target="_blank">
              <Github className="w-5 h-5 text-zinc-400 hover:text-white" />
            </a>

          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-200 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex gap-3 mb-6">
          {tech.map((icon, i) => (
            <img key={i} src={icon} className="w-6 h-6" />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-center">

          {/* Status */}
          <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
            ● {status}
          </span>

          {/* View Details */}
          <button className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm">
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;