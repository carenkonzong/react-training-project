function Hero_section() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1700px] items-center grid grid-cols-2 gap-20">
          <div className="w-9/10 px-15">
            <div className="text-5xl mb-5">Hi, I'm Edwin Nkonzong</div>
            <div className="text-6xl font-extrabold mb-7  bg-gradient-to-r bg-clip-text text-transparent from-[#70e3d2] to-[#0aebc9]">
              Front-End Developer
            </div>
            <div className="text-2xl mb-10 font-light">
              I build responsive and scalable web applications using React and
              TypeScript. I specialize in writing clean, maintainable and
              efficient code optimizing performance, and delivering seamless
              user experiences.
            </div>
            <button className="p-3 text-white font-bold text-lg bg-gradient-to-b from-[#97e1f7] to-[#3ccdf9] rounded-2xl">
              See Projects
            </button>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center flex-col relative">
              <img src="/code.png" alt="code" className="absolute right-125" />
              <img src="/code2.png" alt="code" className="absolute left-120" />
              <img
                src="/image.png"
                alt="image"
                className="w-150 z-10 right-10"
              />
              <div
                className="flex flex-row justify-around items-center self-center rounded-2xl px-6 py-3 
              bg-gradient-to-r from-white/25 via-white/15 to-white/10
              backdrop-blur-xl border border-white/30 shadow-lg shadow-black/10 
              [background-clip:padding-box]"
              >
                <div className="w-30">10+ years industry Experience</div>
                <div className="w-30">50+ Code industry projects</div>
                <div className="w-30">100+ star industry review</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_section;
