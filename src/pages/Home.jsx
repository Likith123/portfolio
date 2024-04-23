function Home() {
  return (
    <section className="w-full min-h-[90vh] relative bg-lightBgColor flex justify-center items-center px-32">
      {/* Left - Intro */}
      <div className="w-[100%] h-[100%] flex flex-col flex-1">
        <p className="mt-16 text-2xl font-semibold">
          Hey, I`m Likith Adusumalli
        </p>
        <h1 className="mt-4 text-4xl font-extrabold">
          <span className="text-primary">Full Stack </span>
          <br /> Developer
        </h1>

        <h4 className="text-2xl font-semibold mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          tenetur, omnis voluptas harum,
          <br />
          magnam architecto optio blanditiis iusto consequatur adipisci quasi
          repellendus dolores numquam dolor.
        </h4>

        <button className="bg-primary text-lightBgColor rounded-md px-4 py-2 w-32 mt-16">
          Resume
        </button>
      </div>

      {/* Right - Image */}
      <div className="w-[100%] h-[100%] flex-1 flex justify-center items-center">
        Image
      </div>
    </section>
  );
}

export default Home;
