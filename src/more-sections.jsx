/* ── Consultation Section — New design with split layout ── */
const ConsultationSection = ({ t }) => (
  <section style={{ position: 'relative', padding: '6rem 0', overflow: 'hidden' }}>
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'url(https://esashomes.com/wp-content/uploads/2024/03/pexels-selcuk-teke-3684396-1.jpg)',
      backgroundSize: 'cover', backgroundPosition: 'center', opacity: .15,
    }} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #000 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.7) 100%)' }} />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <ScrollReveal>
        <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
          <GoldLabel>Get In Touch</GoldLabel>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 300, margin: '.75rem 0 1.25rem', letterSpacing: '-.02em', lineHeight: 1.2 }}>
            Find Your Dream House Through Our Expert Agents
          </h2>
          <p style={{ color: '#9ca3af', lineHeight: 1.7, fontSize: '.95rem', marginBottom: '2.5rem' }}>
            Our dedicated team of real estate professionals is here to guide you every step of the way.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="tel:+905533333295" className="contact-pill liquid-glass" style={{ borderRadius: '9999px' }}>
              <Icon name="phone" size={18} style={{ color: t.accentColor }} />
              <span>(+90) 553 333 32 95</span>
            </a>
            <a href="mailto:info@esashomes.com" className="contact-pill liquid-glass" style={{ borderRadius: '9999px' }}>
              <Icon name="mail" size={18} style={{ color: t.accentColor }} />
              <span>info@esashomes.com</span>
            </a>
            <a href="https://wa.me/905533333295" target="_blank" rel="noopener noreferrer" className="contact-pill" style={{
              borderRadius: '9999px', background: '#25D366', color: '#fff',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ── Why Choose Us Section ── */
const WhyChooseUsSection = ({ t }) => {
  const cards = [
    { icon: 'search', title: 'Search Property', desc: 'Filter properties by location, budget, property type, and citizenship eligibility to find your perfect match.' },
    { icon: 'users', title: 'Meet Your Agent', desc: 'Get personalized guidance from our experienced agents who understand your unique requirements and goals.' },
    { icon: 'check-circle', title: 'Close The Deal', desc: 'Enjoy a smooth and transparent closing process with full legal support and documentation assistance.' },
  ];
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeader label="Why Choose Us" title="We Are Committed To Taking Care Of Our Clients" center={true} />
        </ScrollReveal>
        <div className="grid-3">
          {cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 150}>
              <div className="why-card" style={{ background: '#111', borderRadius: 16, padding: '2.5rem 2rem', textAlign: 'center' }}>
                <div className="gold-icon-circle" style={{ margin: '0 auto 1.5rem', borderColor: `${t.accentColor}33`, background: `${t.accentColor}18` }}>
                  <Icon name={c.icon} size={24} style={{ color: t.accentColor }} />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 500, marginBottom: '.75rem' }}>{c.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '.875rem', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Testimonials Section ── */
const TestimonialsSection = ({ t }) => {
  const testimonials = [
    { name: 'Ali Younis', role: 'Investor', initials: 'AY', text: 'All thanks and appreciation to ESAS Homes for my experience with them more than once. Credibility to continue at the forefront.' },
    { name: 'Hamoud Al-Shabami', role: 'Investor', initials: 'HS', text: 'May God bless you with ease of dealing and speed of completion.' },
    { name: 'Mustafa Abed', role: 'Entrepreneur', initials: 'MA', text: 'After my experience with more than one company, I chose ESAS Homes. Thank God, it was a successful investment. Thank you for the after-sales services.' },
    { name: 'Saeed Abu Al-Hassan', role: 'Client', initials: 'SA', text: 'Speed in dealing after specifying my request. The response was quick and within days the appropriate property was obtained.' },
    { name: 'Faisal Al-Hamoud', role: 'Investor', initials: 'FA', text: 'ESAS Homes and its respected staff are more than just a company. I consider them friends and family in Turkiye.' },
  ];
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeader label="Testimonials" title="What Our Clients Say" center={true} />
        </ScrollReveal>
        <div className="grid-3">
          {testimonials.slice(0, t.testimonialCount).map((tc, i) => (
            <ScrollReveal key={tc.name} delay={i * 150}>
              <div className="testimonial-card">
                <div style={{ display: 'flex', gap: '.25rem', marginBottom: '1.25rem' }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Icon key={j} name="star" size={16} fill={t.accentColor} style={{ color: t.accentColor }} />
                  ))}
                </div>
                <p style={{ color: '#d1d5db', fontSize: '.95rem', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{tc.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: `${t.accentColor}25`, border: `1px solid ${t.accentColor}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '.8rem', fontWeight: 600, color: t.accentColor,
                  }}>{tc.initials}</div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '.9rem' }}>{tc.name}</div>
                    <div style={{ color: '#6b7280', fontSize: '.75rem' }}>{tc.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Blog Section ── */
const BlogSection = ({ t }) => {
  const articles = [
    { title: '5 Steps Before Getting Turkish Nationality', desc: 'Essential steps and requirements for Turkish citizenship through investment.', url: 'https://esashomes.com/5-steps-before-getting-turkish-nationality/', icon: 'globe', cat: 'Citizenship' },
    { title: 'Title Deed Taxes in Turkey', desc: 'Understanding property taxes and title deed costs in Turkish real estate.', url: 'https://esashomes.com/title-deed-taxes-in-turkey/', icon: 'scale', cat: 'Legal' },
    { title: 'Learn About Turkish Passports', desc: 'Everything about obtaining a Turkish passport and its benefits.', url: 'https://esashomes.com/learn-about-turkish-passports/', icon: 'book-open', cat: 'Guide' },
  ];
  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        <ScrollReveal>
          <SectionHeader label="Our Blog" title="Latest News & Articles" />
        </ScrollReveal>
        <div className="grid-3">
          {articles.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 150}>
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ display: 'block' }}>
                <div style={{
                  height: 180,
                  background: `linear-gradient(135deg, ${t.accentColor}25 0%, ${t.accentColor}08 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <Icon name={a.icon} size={48} style={{ color: `${t.accentColor}55` }} strokeWidth={1.2} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '.7rem', fontWeight: 600, color: t.accentColor, textTransform: 'uppercase', letterSpacing: '.1em' }}>{a.cat}</span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 500, margin: '.5rem 0', lineHeight: 1.4 }}>{a.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>{a.desc}</p>
                  <span className="gold-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.85rem', fontWeight: 500, color: t.accentColor }}>
                    Read More <Icon name="arrow-up-right" size={14} style={{ color: t.accentColor }} />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Footer Section ── */
const FooterSection = ({ t }) => (
  <footer style={{ borderTop: '1px solid #1a1a1a', padding: '4rem 0 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', paddingBottom: '3rem' }}>
        <ScrollReveal>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}>
              <img src="assets/esas-logo.png" alt="" style={{ width: 32, height: 32 }} />
              <span style={{ letterSpacing: '.2em', fontWeight: 700, fontSize: '1.1rem' }}>ESAS HOMES</span>
            </div>
            <p style={{ color: '#6b7280', fontSize: '.875rem', lineHeight: 1.7, maxWidth: '24rem', marginBottom: '1.5rem' }}>
              Leading luxury real estate company based in Istanbul, Turkey. We specialize in premium properties, investment opportunities, and citizenship programs.
            </p>
            <div style={{ display: 'flex', gap: '.75rem' }}>
              <a href="https://www.facebook.com/esashomes" target="_blank" rel="noopener noreferrer" className="social-icon"><Icon name="facebook" size={18} /></a>
              <a href="https://www.instagram.com/esas_homes/" target="_blank" rel="noopener noreferrer" className="social-icon"><Icon name="instagram" size={18} /></a>
              <a href="https://www.youtube.com/channel/UCFLqFZ6Uk-5X7bLzq5n5boQ" target="_blank" rel="noopener noreferrer" className="social-icon"><Icon name="youtube" size={18} /></a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '.9rem', marginBottom: '1.25rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {['Home', 'About Us', 'Properties', 'Contact', 'Blog'].map(l => (
                <a key={l} href="#" className="nav-link" style={{ fontSize: '.875rem', color: '#6b7280' }}>{l}</a>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '.9rem', marginBottom: '1.25rem' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', color: '#6b7280', fontSize: '.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem' }}>
                <Icon name="map-pin" size={16} style={{ color: t.accentColor, flexShrink: 0, marginTop: 2 }} />
                <span>Beylikduzu Osb, Esenyurt, Istanbul</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <Icon name="mail" size={16} style={{ color: t.accentColor, flexShrink: 0 }} />
                <span>info@esashomes.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <Icon name="phone" size={16} style={{ color: t.accentColor, flexShrink: 0 }} />
                <span>(+90) 553 333 32 95</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <div style={{ borderTop: '1px solid #1a1a1a', padding: '1.5rem 0', textAlign: 'center' }}>
        <p style={{ color: '#4b5563', fontSize: '.8rem' }}>© 2024 ESAS Homes. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

Object.assign(window, { ConsultationSection, WhyChooseUsSection, TestimonialsSection, BlogSection, FooterSection });