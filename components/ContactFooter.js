import styles from './ContactFooter.module.css';

export default function ContactFooter() {
  return (
    <footer className={`${styles.footer} animate-fade-in-up delay-500`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        
        <div className={styles.contactInfo}>
          <a href="mailto:fatimaasim182@gmail.com" className={styles.contactLink}>
            <span className={styles.label}>Email:</span> 
            <span className="link-underline">fatimaasim182@gmail.com</span>
          </a>
          <a href="https://instagram.com/whatfatimacooks" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            <span className={styles.label}>Instagram:</span> 
            <span className="link-underline">@whatfatimacooks</span>
          </a>
        </div>
        
        <div className={styles.messageBox}>
          <p className={styles.message}>
            Thank you for considering a collaboration. I look forward to creating engaging, aesthetic and high-converting content for your brand.
          </p>
        </div>
      </div>
    </footer>
  );
}
