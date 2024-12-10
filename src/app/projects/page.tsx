
"use client"

import styles from "../styles/Projects.module.css";


import { useState } from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A web application built using Next.js and Tailwind CSS.',
    images: ['/service-1.PNG'], // Example images
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform developed with React and TypeScript.',
    images: ['/service-2.PNG'], // Example images
  },
  {
    title: 'Project Three',
    description: 'An e-commerce platform developed with React and TypeScript.',
    images: ['/service3.PNG'], // Example images
  },
  {
    title: 'Project Four',
    description: 'An e-commerce platform developed with React and TypeScript.',
    images: ['/port.PNG'], // Example images
  },
  {
    title: 'Project Five',
    description: 'An e-commerce platform developed with React and TypeScript.',
    images: ['/service-4.PNG'], // Example images
  },
  {
    title: 'Project Six',
    description: 'An e-commerce platform developed with React and TypeScript.',
    images: ['/resum.PNG'], // Example images
  },
  // Add more projects as needed
];

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = (projectIndex:number) => {
    setCurrentImage((prev) => (prev + 1) % projects[projectIndex].images.length);
  };

  const handlePrev = (projectIndex:number) => {
    setCurrentImage((prev) =>
      prev === 0 ? projects[projectIndex].images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.projectCard}>
            <div className={styles.carousel}>
              {/* <button onClick={() => handlePrev(index)} className={styles.navButton}> */}
                {/* &#9664; Left Arrow */}
              {/* </button> */}
              <img
                src={project.images[currentImage]}
                alt={`${project.title} screenshot`}
                className={styles.projectImage}
              />
              {/* <button onClick={() => handleNext(index)} className={styles.navButton}> */}
                {/* &#9654; Right Arrow */}
              {/* </button> */}
            </div>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
