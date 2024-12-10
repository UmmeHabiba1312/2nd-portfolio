
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
  <div className={styles.contentWrapper}>
    <h1 className={styles.heading}>Contact Me</h1>
    <p className={styles.intro}>
    {`  Have a question or want to work together? Feel free to reach out!`}
    </p>
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Your Name"
          required
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          placeholder="Your Email"
          required
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <textarea
          placeholder="Your Message"
          required
          className={styles.textarea}
        ></textarea>
      </div>
      <button type="submit" className={styles.button}>
        Send Message
      </button>
    </form>
  </div>
</div>


    </>
  );
}
