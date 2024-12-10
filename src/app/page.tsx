
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import styles from "./styles/Home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <>

      <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>Welcome to My Portfolio</h1>
          <p className={styles.description}>
           {` Hi, I'm `}<strong>Umm E Habiba</strong>. I am a passionate web developer
            with expertise in <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong>.
          </p>
          <button className={styles.button}>Explore My Work</button>
        </div>
        <div className={styles.imageSection}>
          <Image
            src="/girl.jpg" // Replace with your image path
            alt="Umm E Habiba"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </div>
    <About/>
    <Projects/>
    <Contact/>
    
    </>
  );
}

