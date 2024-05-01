function About() {
  return (
    <section className="flex min-h-[90vh] w-full flex-col gap-16 text-xl">
      {/* Introduction */}
      <section className="mt-16 flex size-auto flex-col">
        <h1 className="text-4xl font-extrabold text-primary-700">
          Introduction
        </h1>
        <p className="mt-8 font-semibold">
          I`m{" "}
          <span className="text-primary-700">Likith Naga Sai Adusumalli</span>,
          a passionate React Full Stack Developer with a knack for crafting
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
      <section className="flex size-auto flex-col">
        <h1 className="mt-8 text-4xl font-extrabold text-primary-700">
          Experience
        </h1>
        <h2>EdgeVerve Systems Limited - Since 2021</h2>
      </section>

      {/* // TODO: Skills */}
      <section className="flex size-auto flex-col">
        <h1 className="mt-8 text-4xl font-extrabold text-primary-700">
          Skills
        </h1>
      </section>
    </section>
  );
}

export default About;
