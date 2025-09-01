function Skill_section() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex justify-center flex-col w-full max-w-[1200px] items-center mt-40">
          <h1 className="text-4xl mb-2">
            My <span className="font-bold">Skills</span>
          </h1>
          <p className="text-3xl font-thin mb-10">
            Technologies i've been working with recently
          </p>
          <div className="grid grid-cols-5 gap-25 mb-20 items-center">
            <img src="/html.png" className="w-20" alt="" />
            <img src="/css.png" className="w-20" alt="" />
            <img src="/javascript.png" className="w-20" alt="" />
            <img src="react.png" className="w-20" alt="" />
            <img src="tailwind.svg.png" className="w-20" alt="" />
          </div>
          <div className="grid grid-cols-5 gap-25">
            <img src="/linux.png" className="w-20" alt="" />
            <img src="/git.png" className="w-20" alt="" />
            <img src="/github.png" className="w-20" alt="" />
            <img src="/bootstrap.png" className="w-20" alt="" />
            <img src="/npm.png" className="w-20" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill_section;
