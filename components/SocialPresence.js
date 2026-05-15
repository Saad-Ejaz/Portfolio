import styles from './SocialPresence.module.css';

export default function SocialPresence() {
  const socials = [
    { platform: 'Instagram', handle: '@whatfatimacooks', stats: '15.3K Followers | 3.4M+ Reach', color: '#E1306C' },
    { platform: 'Facebook', handle: '@whatfatimacooks', stats: '9K Followers', color: '#1877F2' },
    { platform: 'TikTok', handle: '@whatfatimacooks', stats: '9K Followers', color: '#000000' },
    { platform: 'YouTube', handle: '@whatfatimacooks', stats: '5K Subscribers', color: '#FF0000' },
  ];

  return (
    <section className={`section animate-fade-in-up delay-300`}>
      <h2 className="section-title">Social Media Presence</h2>
      
      <div className={styles.grid}>
        {socials.map((social, index) => (
          <div key={social.platform} className={`${styles.card} hover-lift glass-card`} style={{'--accent': social.color}}>
            <div className={styles.header}>
              <span className={styles.platform}>{social.platform}</span>
            </div>
            <div className={styles.handle}>{social.handle}</div>
            <div className={styles.stats}>{social.stats}</div>
            <div className={styles.glow} style={{backgroundColor: social.color}}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
