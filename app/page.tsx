export default function Home() {
  return (
    <main className="relative">
      <section
        className="
          <section
  className="relative h-screen w-full bg-[url('/hero.jpg')] bg-center bg-cover"
  style={{
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center 30%',
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Text Section */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1
      className="text-5xl md:text-7xl font-black mb-4"
      style={{ fontFamily: 'Sukar Black, sans-serif', color: '#ff7f32' }}
    >
      Yogakshema
    </h1>
    <h2 className="text-lg md:text-2xl font-light tracking-wide text-white/95">
      Complete well-being through Classical Hatha Yoga
    </h2>
  </div>
</section>

      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full max-w-6xl mx-auto px-4
                        flex items-center justify-center text-center">
          <div>
            <h1
              className="text-white font-black
                         text-[40px] leading-tight
                         md:text-[80px] md:leading-[1.05] mb-3"
              style={{ fontFamily: 'Sukar Black, sans-serif' }}
            >
              Yogakshema
            </h1>
            <h2 className="text-white/95 text-[16px] md:text-[24px] font-light tracking-wide">
              Complete well-being through Classical Hatha Yoga
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
