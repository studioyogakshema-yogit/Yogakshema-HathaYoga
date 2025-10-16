import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-full">
      {/* Background Image */}
      <Image
  src="/hero.jpg"
  alt="Yogakshema Hero Image"
  fill
  priority
  className="object-cover"
  style={{ objectPosition: "center 30%" }}
/>


      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1
          className="text-5xl md:text-7xl font-black mb-4"
          style={{ fontFamily: "Sukar Black, sans-serif" }}
        >
          Yogakshema
        </h1>
        <h2 className="text-lg md:text-2xl font-light tracking-wide">
          Complete well-being through Classical Hatha Yoga
        </h2>
      </div>
    </main>
  );
}
