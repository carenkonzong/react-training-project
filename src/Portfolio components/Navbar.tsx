import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex flex-row w-full justify-center">
        <div className="w-full flex max-w-[1700px] py-10 px-15">
          <div className="w-1/2 font-extrabold text-3xl">E.NKONZONG</div>
          <div className="w-1/2 flex justify-between">
            <div>
              <Link className="font-semibold" to="">
                HOME
              </Link>
            </div>
            <div>
              <Link className="font-semibold" to="">
                SKILLS
              </Link>
            </div>
            <div>
              <Link className="font-semibold" to="">
                PROJECTS
              </Link>
            </div>
            <div>
              <Link className="font-semibold" to="">
                EXPERIENCE
              </Link>
            </div>
            <div>
              <Link
                className="text-lg font-bold text-white bg-[#54baaa] bg-gradient-to-b from-[#a0faec] to-[#2bc7b0] p-4 rounded-lg"
                to=""
              >
                CONTACT ME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
