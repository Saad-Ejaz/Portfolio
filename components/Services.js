import styles from './Services.module.css';

export default function Services() {
  const services = [
    'Instagram Reels',
    'TikTok Videos',
    'Story Promotions',
    'UGC Content',
    'Product Photography',
    'Lifestyle Vlogs',
    'Reviews & Brand Features',
    'Aesthetic Food & Fashion Content'
  ];

  return (
    <section className={`section animate-fade-in-up delay-500`}>
      <h2 className="section-title">Services I Offer</h2>
      
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.serviceCard} hover-lift glass-card`}>
            <div className={styles.iconContainer}>
              <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className={styles.serviceName}>{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
