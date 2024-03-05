"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://portfolio-sahil259.netlify.app/",
  },
  {
    id: 2,
    title: "Food Ordering Websites",
    description: "Foodie App is a user-friendly food ordering website offering user-friendly interfaces, secure authentication, menu browsing, adding products to the cart and order management.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sahil9259/Food-App/",
    previewUrl: "https://foodie-app-sahil9259.netlify.app/",
  },
  {
    id: 3,
    title: "Video Calling Website",
    description: "A responsives video calling websites providing high-quality video, personalized features, and secure communication for an immersive and secure virtual experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sahil9259/Video_Meeting",
    previewUrl: "https://videoapp-sahil9259.netlify.app/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    description: "A vast library of films, series, and documentaries, intuitive user interfaces, personalized recommendations, and seamless streaming for an unparalleled cinematic experience.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sahil9259/netflix-clone",
    previewUrl: "https://netflix-sahil9259.netlify.app/",
  },
  {
    id: 5,
    title: "Quotes Finder",
    description: "A visually appealing, responsive API-based Reactjs project that displays quotes.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://quote-sahil9259.netlify.app/",
    previewUrl: "https://github.com/Sahil9259/my_app",
  },
  {
    id: 6,
    title: "Movie Finder",
    description: "Movie Finder help the users to search for and explore comprehensive information about movies.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    // gitUrl: "https://sahil9259-moviefinder.netlify.app/",
    gitUrl: "",
    previewUrl: "https://sahil9259-moviefinder.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
