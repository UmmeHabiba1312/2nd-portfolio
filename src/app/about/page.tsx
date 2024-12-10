
import styles from "../styles/About.module.css";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className={styles.container}>
      {/* About Section */}
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
           {` I'm a`} <strong>beginner web developer</strong> with a strong passion for learning and growing. 
           {` My goal is to create dynamic, responsive, and user-friendly web applications that deliver 
            exceptional user experiences.`}
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
          height={500}
          width={500}
            src="/hero.png"
            alt="About Umm E Habiba"
            className={styles.image}
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillsTitle}>My Skills</h2>
        <ul className={styles.skillsList}>
          <li>{`HTML5 & CSS3`}</li>
          <li>{`JavaScript (ES6+)`}</li>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
        </ul>
        {/* <p className={styles.skillsNote}>Other skills are displayed visually below!</p> */}
      </div>
    </div>
    </>
  );
}
