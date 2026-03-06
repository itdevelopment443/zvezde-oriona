"use client";

export default function HomeHero() {
  const items = Array.from({ length: 6 }).map(() => "Zvezde Oriona");

  return (
    <section
      className="h-screen justify-end py-18 px-0 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(64, 64, 64, 0.1), rgba(10, 31, 63, 0.3), rgba(10, 31, 63, 0.8)),
          url('/cgp/placholder-2.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full overflow-hidden">
        <div className="flex w-max gap-4 animate-marquee">
          {/* First set */}
          {items.map((text, i) => (
            <p
              key={i}
              className="uppercase text-4xl md:text-6xl lg:text-8xl  font-bold odd:text-tertiary"
            >
              {text}
            </p>
          ))}

          {/* Duplicate set (required for infinite loop) */}
          {items.map((text, i) => (
            <p
              key={i}
              className="uppercase text-4xl md:text-6xl  lg:text-8xl font-bold odd:text-tertiary "
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
