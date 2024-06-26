import { FiDownload } from "react-icons/fi";

function Home() {
  const isMonthsCompleted =
    new Date().getMonth() - new Date("10/11/2021").getMonth();
  let currentYear =
    new Date().getFullYear() - new Date("10/11/2021").getFullYear();
  currentYear = isMonthsCompleted >= 0 ? currentYear : currentYear - 1;
  // const startYear = ;
  return (
    <section className="relative flex h-[90vh] w-full justify-center gap-4 pt-4">
      {/* Left - Intro */}
      <div className="grid h-full w-2/3 grid-cols-3 grid-rows-6 gap-4">
        <div className="col-span-3 row-span-4 text-wrap rounded-lg bg-slate-200 p-8">
          <p className="text-2xl font-semibold">
            Hey, I`m <span className="font-bold">Likith Adusumalli</span>
          </p>
          <h1 className="mt-4 text-4xl font-extrabold">
            <span className="text-primary-700">Full Stack </span>
            <br /> Developer
          </h1>

          <h4 className="mt-8 text-2xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            tenetur, omnis voluptas harum,
            <br />
            magnam architecto optio blanditiis iusto consequatur adipisci quasi
            repellendus dolores numquam dolor.
          </h4>
        </div>
        <div className="col-span-2 flex items-center justify-evenly gap-4 rounded-lg bg-slate-200">
          <button className="flex max-h-12 w-40 gap-4 items-center justify-center rounded-lg border-2 border-primary-700 bg-primary-100 px-4 py-2 text-lg tracking-wider text-primary-700">
            <p>Resume</p> <FiDownload />
          </button>
          <button className="max-h-12 w-40 rounded-lg bg-primary-700 px-4 py-2 text-lg tracking-wider text-primary-100">
            Get in touch
          </button>
        </div>
        <div className="col-span-2 flex items-center justify-evenly gap-4 rounded-lg bg-slate-300"></div>
        <div className="col-start-3 col-end-4 row-start-5 row-end-7 flex items-center justify-center rounded-lg bg-primary-700 text-primary-100 opacity-100">
          <p className="flex flex-col items-center justify-center gap-4 text-lg font-bold tracking-wider">
            <span className="text-4xl font-extrabold"> {currentYear}+</span>
            Years of<span>Full-Stack Experience</span>
          </p>
        </div>
        <div className="col-span-3"></div>
      </div>

      {/* Right - Image */}
      <div className="flex h-[calc(100%-1rem)] w-1/3 flex-1 items-center justify-center rounded-lg bg-slate-400">
        Image
      </div>
    </section>
  );
}

export default Home;
