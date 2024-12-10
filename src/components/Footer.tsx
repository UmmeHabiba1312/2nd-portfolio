import Link from 'next/link';
import styles from './footer.module.css'; // Import the CSS for the footer styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyText}>
         {` © 2024 Umm E Habiba. All rights reserved.`}
        </p>
        <div className={styles.socialLinks}>
          <Link href="https://www.linkedin.com/in/umm-e-habiba-86bb722b6/" target="_blank" className={styles.socialIcon}>LinkedIn
          </Link>
          <Link href="https://github.com/UmmeHabiba1312" target="_blank" className={styles.socialIcon}>GitHub
            
          </Link>
          {/* <Link href="mailto:your-email@example.com"  className={styles.socialIcon}>Email  
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
