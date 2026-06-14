const { useState, useRef, useEffect } = React;

/* ── WhatsApp Widget ── */
const WhatsAppWidget = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 60, y: 30 });

  useEffect(() => {
    const t1 = setTimeout(() => setCursorVisible(true), 2500);
    const t2 = setTimeout(() => setCursorPos({ x: 24, y: 18 }), 3000);
    const t3 = setTimeout(() => setHovered(true), 3600);
    const t4 = setTimeout(() => setCursorPos({ x: 60, y: 40 }), 5000);
    const t5 = setTimeout(() => { setHovered(false); setCursorVisible(false); }, 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  return (
    <div className="animate-blur-fade-up" style={{ animationDelay: '1000ms', position: 'fixed', bottom: 24, right: 24, zIndex: 100 }}>
      {cursorVisible && (
        <div style={{
          position: 'absolute', zIndex: 110, left: cursorPos.x, top: cursorPos.y,
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)', pointerEvents: 'none',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
            <path d="M5.65 5.65l1.95 8.1 2.83-2.83 4.95 4.95 1.41-1.41-4.95-4.95 2.83-2.83z"/>
          </svg>
        </div>
      )}
      <a href="https://wa.me/905533333295" target="_blank" rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: hovered ? '.75rem' : '0',
          background: hovered ? '#25D366' : 'rgba(37,211,102,0.9)',
          padding: hovered ? '.75rem 1.5rem .75rem 1rem' : '.875rem',
          borderRadius: hovered ? '9999px' : '50%',
          boxShadow: hovered ? '0 8px 32px rgba(37,211,102,0.4), 0 0 60px rgba(37,211,102,0.15)' : '0 4px 16px rgba(37,211,102,0.3)',
          transition: 'all .4s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          cursor: 'pointer', textDecoration: 'none', color: '#fff', overflow: 'hidden', whiteSpace: 'nowrap',
        }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <div style={{ maxWidth: hovered ? '200px' : '0px', opacity: hovered ? 1 : 0, transition: 'all .4s cubic-bezier(0.22, 1, 0.36, 1)', overflow: 'hidden' }}>
          <div style={{ fontSize: '.7rem', fontWeight: 600, letterSpacing: '.05em', marginBottom: '1px' }}>Contact Us</div>
          <div style={{ fontSize: '.8rem', fontWeight: 500 }}>+90 553 333 32 95</div>
        </div>
      </a>
      <div style={{
        position: 'absolute', inset: -6, borderRadius: '50%', border: '2px solid rgba(37,211,102,0.3)',
        animation: 'whatsappPulse 2s ease-out infinite', pointerEvents: 'none',
        opacity: hovered ? 0 : 1, transition: 'opacity .3s ease',
      }} />
    </div>
  );
};

/* ── Navbar ── */
const Navbar = ({ t }) => {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About Us', 'Properties', 'Contact Us', 'Blog'];

  return (
    <>
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1280, margin: '0 auto' }}>
          <div className="animate-blur-fade-up" style={{ animationDelay: '0ms', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <img src="assets/esas-logo.png" alt="ESAS Homes" style={{ width: 36, height: 36, filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.4))' }} />
            <span style={{ letterSpacing: '.2em', fontWeight: 700, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}>ESAS HOMES</span>
          </div>
          <div className="hide-below-lg" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {links.map((l, i) => (
              <a key={l} href="#" className="nav-link animate-blur-fade-up"
                style={{ fontSize: '.875rem', letterSpacing: '.05em', animationDelay: `${100 + i * 60}ms` }}>{l}</a>
            ))}
            <div className="animate-blur-fade-up" style={{ animationDelay: '420ms' }}>
              <button className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '.3rem', fontSize: '.875rem', letterSpacing: '.05em', background: 'none', border: 'none' }}>
                <Icon name="globe" size={15} /> EN <Icon name="chevron-down" size={14} />
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <button className="liquid-glass animate-blur-fade-up hide-below-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 1.25rem', borderRadius: '9999px', fontSize: '.875rem', animationDelay: '350ms' }}>
              <Icon name="search" size={16} /><span>Search</span>
            </button>
            <button className="liquid-glass animate-blur-fade-up show-below-lg"
              onClick={() => setOpen(!open)}
              style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', animationDelay: '350ms' }}>
              <div style={{ transition: 'transform .5s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <Icon name={open ? 'x' : 'menu'} size={18} />
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div className="show-below-lg" style={{
        position: 'absolute', top: 72, left: 0, right: 0, zIndex: 40,
        background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1a1a1a', padding: open ? '1.5rem' : '0 1.5rem',
        maxHeight: open ? 420 : 0, overflow: 'hidden', opacity: open ? 1 : 0,
        transform: open ? 'translateY(0)' : 'translateY(-16px)',
        pointerEvents: open ? 'auto' : 'none', transition: 'all .4s ease',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[...links, 'Language'].map(l => (
            <a key={l} href="#" className="nav-link" style={{ fontSize: '.95rem', padding: '.25rem 0', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              {l === 'Language' && <Icon name="globe" size={15} />} {l}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

/* ── Hero Section ── */
const HeroSection = ({ t }) => (
  <section style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#000' }}>
    {/* Background video — real footage fills the entire hero edge-to-edge (no bars, no blur) */}
    <video
      ref={(el) => { if (el) { el.muted = true; const p = el.play && el.play(); if (p && p.catch) p.catch(() => {}); } }}
      autoPlay muted loop playsInline preload="auto" poster="assets/hero-poster.jpg"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 55%', zIndex: 0 }}>
      <source src="assets/hero-video.mp4" type="video/mp4" />
    </video>

    {/* Dark gradient overlay */}
    <div style={{
      position: 'absolute', inset: 0, zIndex: 1,
      background: `linear-gradient(180deg, rgba(0,0,0,${t.overlayDarkness}) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,${t.overlayDarkness + 0.15}) 100%)`,
      pointerEvents: 'none',
    }} />

    {/* Branded glass bar at bottom — covers Gemini watermark */}
    <div className="animate-blur-fade-up" style={{
      animationDelay: '600ms',
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 9,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '.6rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem',
    }}>
      <span style={{ fontSize: '.65rem', letterSpacing: '.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
        ESAS HOMES · Istanbul · Premium Real Estate · Since 2009 · Trusted by 420+ Partners
      </span>
    </div>

    <WhatsAppWidget />
    <Navbar t={t} />

    {/* Hero Content */}
    <div className="hero-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem' }}>
      <div className="animate-blur-fade-up" style={{ animationDelay: '300ms', marginBottom: '1rem' }}>
        <span style={{ color: t.accentColor, fontSize: 'clamp(.7rem, 1.5vw, .85rem)', fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase' }}>
          {t.heroSubtitle}
        </span>
      </div>

      <h1 className="animate-blur-fade-up" style={{
        animationDelay: '450ms',
        fontSize: `clamp(2.5rem, 7vw, ${t.headlineSize}rem)`,
        fontWeight: t.headlineWeight,
        letterSpacing: '-0.03em', lineHeight: 1.05,
        textShadow: '0 4px 40px rgba(0,0,0,0.5)', marginBottom: '1.5rem',
      }}>
        {t.heroLine1}<br />{t.heroLine2}
      </h1>

      <p className="animate-blur-fade-up" style={{
        animationDelay: '600ms', color: 'rgba(255,255,255,0.75)', maxWidth: '36rem',
        fontSize: 'clamp(.9rem, 1.5vw, 1.1rem)', fontWeight: 300, lineHeight: 1.7,
        textShadow: '0 2px 12px rgba(0,0,0,0.4)', marginBottom: '2.5rem',
      }}>
        {t.heroDescription}
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className="cta-primary animate-blur-fade-up" style={{
          animationDelay: '750ms',
          background: t.buttonStyle === 'white' ? '#fff' : t.accentColor,
          color: t.buttonStyle === 'white' ? '#000' : '#fff',
        }}>
          Explore Estates <Icon name="arrow-up-right" size={18} />
        </button>
        <button className="cta-secondary liquid-glass animate-blur-fade-up" style={{ animationDelay: '850ms' }}>
          Schedule Consultation
        </button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="animate-blur-fade-up hero-scroll" style={{
      animationDelay: '1100ms', display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingBottom: '3.5rem', gap: '.5rem', position: 'relative', zIndex: 10,
    }}>
      <span style={{ fontSize: '.7rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Scroll</span>
      <div style={{ animation: 'bounce 2s infinite' }}>
        <Icon name="chevron-down" size={18} style={{ color: 'rgba(255,255,255,0.5)' }} />
      </div>
    </div>
  </section>
);

Object.assign(window, { HeroSection });