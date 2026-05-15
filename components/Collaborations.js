import styles from './Collaborations.module.css';

export default function Collaborations() {
  const collabs = [
    {
      category: 'Beauty & Parlours',
      brands: ['Najjas', 'Styloria', 'Ellas Aesthetic', 'Hifgy', 'Maybelline', 'Laksh Shop']
    },
    {
      category: 'Fashion & Clothing',
      brands: ['Velorea', 'Sajiero']
    },
    {
      category: 'Food & Restaurants',
      brands: ['Bistro', 'Little Karachi Cafe', 'restaurants in Saudi Arabia']
    },
    {
      category: 'Other Collaborations',
      brands: ['Ding (International Recharge Brand)', 'Escapistan Mystery House']
    }
  ];

  return (
    <section className={`section animate-fade-in-up delay-400`}>
      <h2 className="section-title">Brands & Collaborations</h2>
      
      <div className={styles.grid}>
        {collabs.map((collab, index) => (
          <div key={index} className={`${styles.card} hover-lift glass-card`}>
            <h3 className={styles.categoryTitle}>{collab.category}</h3>
            <ul className={styles.brandList}>
              {collab.brands.map((brand, i) => (
                <li key={i} className={styles.brandItem}>
                  <span className={styles.bullet}></span>
                  <span className="link-underline">{brand}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
