export default function Home() {
  return (
    <main className="relative">
      <section
        className="
          relative h-[72vh] md:h-[88vh] w-full
          bg-[url('/hero.jpg')] bg-center bg-cover
          md:bg-fixed
        "
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
