import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={`section animate-fade-in-up delay-200`}>
      <div className={styles.grid}>
        <div className={`${styles.card} hover-lift glass-card`}>
          <h2 className="section-title">About Me</h2>
          <p className={styles.text}>
            I'm Fatima Ejaz, a Pakistan-based lifestyle and content creator known for creating soft, aesthetic and relatable content focused on food, beauty, modest fashion, routines and everyday life. My content connects strongly with young girls and women across Pakistan, Saudi Arabia, India and international audiences through engaging storytelling and high-performing UGC-style reels.
          </p>
        </div>
        
        <div className={`${styles.card} hover-lift glass-card`}>
          <h2 className="section-title">Audience</h2>
          <p className={styles.text}>
            My audience mainly consists of young girls and women interested in food, beauty, fashion, lifestyle and relatable everyday content. My audience is primarily based in Pakistan with additional reach in Saudi Arabia, India and worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
