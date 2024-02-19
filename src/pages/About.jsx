function About() {
    return (
        <section className="w-full h-auto relative bg-[#f4f5ff] flex flex-col justify-center items-center">
            {/* Introduction */}
            <section className="w-[100%] h-auto flex-1 flex flex-col ml-16">
                <h1 className="mt-8 text-4xl font-extrabold text-[#0693f0]">
                    Introduction
                </h1>
                <p className="mt-16 text-xl font-semibold">
                    I`m{" "}
                    <span className="text-[#0693f0]">
                        Likith Naga Sai Adusumalli
                    </span>
                    , a passionate React Full Stack Developer with a knack for
                    crafting seamless and engaging web applications. I thrive on
                    the challenge of bringing ideas to life through code,
                    ensuring every interaction feels intuitive and delightful.
                </p>
                <p className="mt-8 text-xl font-semibold">
                    My superpower is bridging the gap between design and
                    functionality. I`m equally comfortable crafting
                    pixel-perfect UIs with React components as I am architecting
                    robust back-end solutions using Node.js, Express, and
                    MongoDB.
                </p>
            </section>

            {/* Experience */}
            <section className="w-[100%] h-auto flex-1 flex flex-col ml-16">
                <h1 className="mt-8 text-4xl font-extrabold text-[#0693f0]">
                    Experience
                </h1>
            </section>

            {/* Skills */}
            <section className="w-[100%] h-auto flex-1 flex flex-col ml-16">
                <h1 className="mt-8 text-4xl font-extrabold text-[#0693f0]">
                    Skills
                </h1>
            </section>
        </section>
    );
}

export default About;
