import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-main rounded-lg">
      <header className="text-center py-10">
        <h1 className="text-4xl font-display  mb-4">About Next Rivals</h1>
        <p className="text-lg ">
          Welcome to your ultimate retro gaming destination!
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <h2 className="text-3xl font-display ">Our Mission</h2>
        <p className="text-lg ">
          At Next Rivals, we believe in the power of games that stood the test of time. From pixelated
          adventures to iconic action-packed titles, our collection is carefully curated to bring back the
          golden age of gaming.
        </p>
        <p className="text-lg">
          Our goal is to make retro gaming accessible to everyone. We want to provide a platform where you can
          relive the experiences of your childhood or explore the games that shaped the history of gaming.
        </p>

        <h2 className="text-3xl font-display ">The Games</h2>
        <p className="text-lg ">
          We feature a variety of beloved retro games across different platforms—from classic consoles like
          the NES, SNES, Sega Genesis, and more. You can enjoy hours of fun and even challenge your friends to
          some multiplayer action.
        </p>
        <p className="text-lg ">
          Our emulators are designed for smooth, hassle-free gameplay, so you can focus on the fun!
        </p>

        <h2 className="text-3xl font-display ">Join the Community</h2>
        <p className="text-lg ">
          Become a part of our ever-growing community of retro gaming enthusiasts. Share tips, challenges, and
          memories with other players, and stay updated on the latest additions to our game library.
        </p>
        <p className="text-lg">
          There's always something new to explore at **Next Rivals**!
        </p>
      </section>
    </div>
  );
};

export default About;
