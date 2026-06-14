/* ── Main App with Tweaks ── */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#C8A96E",
  "headlineWeight": 300,
  "headlineSize": 6,
  "overlayDarkness": 0.35,
  "heroLine1": "Where Luxury",
  "heroLine2": "Meets Legacy",
  "heroSubtitle": "Premium Real Estate · Istanbul",
  "heroDescription": "Curated ultra-luxury residences and bespoke developments in Istanbul's most prestigious locations.",
  "buttonStyle": "white",
  "galleryStyle": "masonry",
  "testimonialCount": 3,
  "showStats": true,
  "showBlog": true,
  "showWhyChooseUs": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  return (
    <div>
      <HeroSection t={t} />
      {t.showStats && <StatsSection t={t} />}
      <AboutSection t={t} />
      <PropertiesSection t={t} />
      <ConsultationSection t={t} />
      {t.showWhyChooseUs && <WhyChooseUsSection t={t} />}
      <TestimonialsSection t={t} />
      {t.showBlog && <BlogSection t={t} />}
      <FooterSection t={t} />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakText label="Headline Line 1" value={t.heroLine1}
          onChange={(v) => setTweak('heroLine1', v)} />
        <TweakText label="Headline Line 2" value={t.heroLine2}
          onChange={(v) => setTweak('heroLine2', v)} />
        <TweakText label="Subtitle" value={t.heroSubtitle}
          onChange={(v) => setTweak('heroSubtitle', v)} />
        <TweakText label="Description" value={t.heroDescription}
          onChange={(v) => setTweak('heroDescription', v)} />
        <TweakSlider label="Headline Size" value={t.headlineSize} min={4} max={8} step={0.5} unit="rem"
          onChange={(v) => setTweak('headlineSize', v)} />
        <TweakRadio label="Headline Weight" value={t.headlineWeight}
          options={[200, 300, 400]}
          onChange={(v) => setTweak('headlineWeight', v)} />
        <TweakSlider label="Overlay Darkness" value={t.overlayDarkness} min={0.1} max={0.7} step={0.05}
          onChange={(v) => setTweak('overlayDarkness', v)} />
        <TweakRadio label="Button Style" value={t.buttonStyle}
          options={['white', 'accent']}
          onChange={(v) => setTweak('buttonStyle', v)} />

        <TweakSection label="Brand" />
        <TweakColor label="Accent Color" value={t.accentColor}
          options={['#C8A96E', '#D4AF37', '#B8860B', '#E8C872', '#A0785A', '#8B7355']}
          onChange={(v) => setTweak('accentColor', v)} />

        <TweakSection label="Sections" />
        <TweakToggle label="Show Stats Bar" value={t.showStats}
          onChange={(v) => setTweak('showStats', v)} />
        <TweakToggle label="Show Why Choose Us" value={t.showWhyChooseUs}
          onChange={(v) => setTweak('showWhyChooseUs', v)} />
        <TweakToggle label="Show Blog" value={t.showBlog}
          onChange={(v) => setTweak('showBlog', v)} />
        <TweakSlider label="Testimonials Count" value={t.testimonialCount} min={1} max={5} step={1}
          onChange={(v) => setTweak('testimonialCount', v)} />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);