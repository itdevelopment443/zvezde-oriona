export default function HomeHero() {
  return (
    <div
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(64, 64, 64, 0.4), rgba(0, 0, 0, 0.9)),
          url('/cgp/placholder-2.png')
        `,
      }}
      className="h-screen"
    ></div>
  );
}
