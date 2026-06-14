/* ── Stats Section ── */
const StatsSection = ({ t }) => {
  const stats = [
    { n: 420, label: 'Trusted Partners' },
    { n: 850, label: 'Properties Built' },
    { n: 1200, label: 'Happy Clients' },
    { n: 15, label: 'Years Experience' },
  ];
  return (
    <section style={{ padding: '0' }}>
      <SectionSeparator />
      <div className="container" style={{ padding: '4rem 1rem' }}>
        <ScrollReveal>
          <div className="grid-4" style={{ textAlign: 'center' }}>
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div>
                  <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, color: t.accentColor, marginBottom: '.5rem' }}>
                    <CountUp target={s.n} suffix="+" />
                  </div>
                  <div style={{ fontSize: '.75rem', textTransform: 'uppercase', letterSpacing: '.15em', color: '#6b7280' }}>{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <SectionSeparator />
    </section>
  );
};

/* ── About Section ── */
const AboutSection = ({ t }) => {
  const imgs = [
    'https://esashomes.com/wp-content/uploads/2024/08/6-1247-x-1247-1024x1024.jpg',
    'https://esashomes.com/wp-content/uploads/2024/08/PEGA-KARTAL-1-7-1024x576.jpg',
    'https://esashomes.com/wp-content/uploads/2024/08/LOCA-3-1024x512.jpg',
    'https://esashomes.com/wp-content/uploads/2024/08/4-6-933x1024.jpg',
  ];
  const features = [
    { icon: 'badge-check', title: 'Low Home Taxes', desc: 'Turkey offers significantly lower property taxes compared to many European countries.' },
    { icon: 'shield-check', title: 'Government Guarantee', desc: 'Properties backed by Turkish government regulations and guarantees.' },
    { icon: 'file-check', title: 'Property Insurance', desc: 'Comprehensive insurance coverage for all our listed properties.' },
    { icon: 'zap', title: 'Easy & Quick Process', desc: 'Streamlined buying process from selection to key handover.' },
  ];
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="about-layout">
          <ScrollReveal>
            <div className="about-images">
              <div>
                <img src={imgs[0]} alt="Toskana Vadisi" style={{ marginBottom: '1rem' }} />
                <img src={imgs[2]} alt="Kosuyolu Koru" />
              </div>
              <div className="img-col-2">
                <img src={imgs[1]} alt="Misk Villas" style={{ marginBottom: '1rem' }} />
                <img src={imgs[3]} alt="Queen Villa" />
              </div>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={100}><GoldLabel>About ESAS Homes</GoldLabel></ScrollReveal>
            <ScrollReveal delay={200}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 300, letterSpacing: '-.02em', margin: '.75rem 0 1.25rem', lineHeight: 1.2 }}>
                We Provide The Simple Ways To Invest in Real Estate
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '.95rem', marginBottom: '2rem' }}>
                Whether you're looking to maximize your financial future or seeking the perfect home in Istanbul, ESAS Homes provides expert guidance and curated portfolios to match your vision.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {features.map(f => (
                  <div key={f.title} className="feature-card" style={{ background: '#111', borderRadius: 12, padding: '1.25rem' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: `${t.accentColor}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '.75rem' }}>
                      <Icon name={f.icon} size={18} style={{ color: t.accentColor }} />
                    </div>
                    <h4 style={{ fontSize: '.9rem', fontWeight: 500, marginBottom: '.3rem' }}>{f.title}</h4>
                    <p style={{ fontSize: '.75rem', color: '#6b7280', lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <a href="https://esashomes.com/about-us/" target="_blank" rel="noopener noreferrer" className="gold-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.9rem', fontWeight: 500, color: t.accentColor }}>
                More About Us <Icon name="arrow-up-right" size={16} style={{ color: t.accentColor }} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Properties Section — Cards with full specs ── */
const properties = [
  { name: 'Yaka Park Kartal', img: 'https://esashomes.com/wp-content/uploads/2024/08/6-1247-x-1247-1024x1024.jpg', loc: 'Kartal, Istanbul', status: 'Ready To Move', tags: ['Sea View', 'Investment', 'Luxury Apartments'] },
  { name: 'Referans Loca Kartal', img: 'https://esashomes.com/wp-content/uploads/2024/08/LOCA-3-1024x512.jpg', loc: 'Kartal, Istanbul', status: 'Under Construction', tags: ['Sea View', 'Investment', 'Luxury Apartments'] },
  { name: 'Pega Kartal', img: 'https://esashomes.com/wp-content/uploads/2024/08/PEGA-KARTAL-1-7-1024x576.jpg', loc: 'Kartal, Istanbul', status: 'Ready To Move', tags: ['Sea View', 'Investment', 'Luxury Apartments'] },
  { name: 'Nouvel Maltepe', img: 'https://esashomes.com/wp-content/uploads/2024/08/4-6-933x1024.jpg', loc: 'Maltepe, Istanbul', status: 'Ready To Move', tags: ['Sea View', 'Investment', 'Luxury Apartments'] },
  { name: 'Toskana Vadisi', img: 'https://esashomes.com/wp-content/uploads/2024/08/Toskana-Vadisi-Orrizonte-7-1024x493.jpg', loc: 'Buyukcekmece, Istanbul', status: 'Ready To Move', tags: ['Luxury Villas', 'Sea View', '1.7M m²'] },
  { name: 'Niva Vita Villas', img: 'https://esashomes.com/wp-content/uploads/2024/08/16-2-1024x576.jpg', loc: 'Buyukcekmece, Istanbul', status: 'Ready To Move', tags: ['Luxury Villas', 'Citizenship', 'Investment'] },
];

const PropertiesSection = ({ t }) => (
  <section style={{ padding: '6rem 0' }}>
    <div className="container">
      <ScrollReveal>
        <SectionHeader label="Properties" title="Recently Added Properties"
          right={
            <a href="https://esashomes.com/properties/" target="_blank" rel="noopener noreferrer" className="gold-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.9rem', fontWeight: 500, color: t.accentColor }}>
              View All <Icon name="arrow-up-right" size={16} style={{ color: t.accentColor }} />
            </a>
          } />
      </ScrollReveal>
      <div className="grid-3">
        {properties.map((p, i) => (
          <ScrollReveal key={p.name} delay={i * 100}>
            <div className="property-card" style={{ cursor: 'pointer' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={p.img} alt={p.name} className="prop-img" style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                <span className={p.status === 'Ready To Move' ? 'status-ready' : 'status-construction'}
                  style={{ position: 'absolute', top: 12, left: 12, fontSize: '.7rem', fontWeight: 500, padding: '4px 10px', borderRadius: 6 }}>
                  {p.status}
                </span>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 500, marginBottom: '.35rem' }}>{p.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem', color: '#6b7280', fontSize: '.8rem', marginBottom: '.75rem' }}>
                  <Icon name="map-pin" size={12} /> {p.loc}
                </div>
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                  {p.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { StatsSection, AboutSection, PropertiesSection });