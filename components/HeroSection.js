import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.hero} animate-fade-in-up delay-100`}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Fatima Ejaz</h1>
        <p className={styles.handle}>@whatfatimacooks</p>
        
        <div className={styles.categories}>
          {['Lifestyle', 'Food', 'Beauty', 'Modest Fashion', 'UGC Creator'].map((category, index) => (
            <span key={category} className={`${styles.categoryTag} animate-fade-in-up`} style={{animationDelay: `${0.2 + (index * 0.1)}s`}}>
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.divider}></div>
    </section>
  );
}
