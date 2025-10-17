export default function Home() {
  return (
    <main className="relative">
      <section
        className="relative h-screen w-full bg-[url('/hero.jpg')] bg-center bg-cover"
        style={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center 30%',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1
            className="mb-4 text-5xl font-black md:text-7xl drop-shadow-[0_0_25px_rgba(255,127,50,0.6)]"
            style={{
              fontFamily: 'Sukar Black, sans-serif',
              color: '#ff7f32',
              textShadow:
                '0 0 25px rgba(255,127,50,0.6), 0 0 45px rgba(255,127,50,0.4)',
            }}
          >
            Yogakshema
          </h1>
          <h2
  className="text-lg md:text-2xl font-light tracking-wide text-white/95"
  style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
>
  Complete well-being through Classical Hatha Yoga
</h2>

        </div>
      </section>
    </main>
  );
}

