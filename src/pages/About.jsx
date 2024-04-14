function About() {
  return (
    <section className="w-full h-screen text-xl relative bg-[#f4f5ff] flex flex-col gap-16 pl-16">
      {/* Introduction */}
      <section className="size-auto mt-16 flex flex-col">
        <h1 className="text-4xl font-extrabold text-[#0693f0]">Introduction</h1>
        <p className="mt-8 font-semibold">
          I`m <span className="text-[#0693f0]">Likith Naga Sai Adusumalli</span>
          , a passionate React Full Stack Developer with a knack for crafting
          seamless and engaging web applications. I thrive on the challenge of
          bringing ideas to life through code, ensuring every interaction feels
          intuitive and delightful.
        </p>
        <p className="mt-8 font-semibold">
          My superpower is bridging the gap between design and functionality.
          I`m equally comfortable crafting pixel-perfect UIs with React
          components as I am architecting robust back-end solutions using
          Node.js, Express, and MongoDB.
        </p>
      </section>

      {/* // TODO: Experience */}
      <section className="size-auto flex flex-col">
        <h1 className="mt-8 text-4xl font-extrabold text-[#0693f0]">
          Experience
        </h1>
        <h2>EdgeVerve Systems Limited - Since 2021</h2>
      </section>

      {/* // TODO: Skills */}
      <section className="size-auto flex flex-col">
        <h1 className="mt-8 text-4xl font-extrabold text-[#0693f0]">Skills</h1>
      </section>
    </section>
  );
}

export default About;
