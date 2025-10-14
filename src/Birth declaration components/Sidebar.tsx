import { Activity, House, FileText, User, Bell, LogOut } from "lucide-react";

function sidebar() {
  return (
    <>
      <div className="bg-[#fbfbfb] border-r border-black/10 w-80 fixed flex flex-col h-full">
        <div>
          <div className="flex justify-center m-5 mb-8 mt-10">
            <div className="flex flex-col p-8 bg-gradient-to-r from-[#3582f8] to-[#23bf72] rounded-2xl w-full max-w-[1216px] shadow-xl">
              <div className="flex flex-row mb-5">
                <div className="flex items-center mr-3">
                  <Activity size={35} color="white" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold mb-1">Birth Registry</h1>
                  <h2 className="text-xl font-extralight text-white/75">
                    Citizen Portal
                  </h2>
                </div>
              </div>
              <h1 className="text-xl font-normal">
                Welcome to Birth Declaration Portal
              </h1>
              <h1 className="text-lg font-extralight text-white">
                Manage your declarations
              </h1>
            </div>
          </div>
          <hr className="border-black/10" />
        </div>

        <div className="p-3 px-3 mt-5 flex flex-col h-full flex-grow text-gray-500">
          <div className="mb-15 px-3">
            <h1 className="mb-5 px-3">NAVIGATION</h1>
            <h1 className="flex px-3 py-2 rounded-2xl items-center hover:-translate-1 transition-all duration-300 hover:bg-[#f4f3f5] hover:text-black hover:shadow-md">
              <House size={18} className="mr-5" />
              Dashboard
            </h1>
            <h1 className="flex px-3 py-2 rounded-2xl items-center hover:-translate-1 transition-all duration-300 hover:bg-[#f4f3f5] hover:text-black hover:shadow-md">
              <FileText size={18} className="mr-5" />
              All Declarations
            </h1>
          </div>
          <div className="px-3">
            <h1 className="mb-5 px-3">ACCOUNT</h1>
            <h1 className="flex px-3 py-2 rounded-2xl items-center hover:-translate-1 transition-all duration-300 hover:bg-[#f4f3f5] hover:text-black hover:shadow-md">
              <User size={18} className="mr-5" />
              Profile
            </h1>
            <h1 className="flex px-3 py-2 rounded-2xl items-center hover:-translate-1 transition-all duration-300 hover:bg-[#f4f3f5] hover:text-black hover:shadow-md">
              <Bell size={18} className="mr-5" />
              Notifications
            </h1>
          </div>
        </div>
        <>
          <hr className="border-black/10" />
          <h1 className="m-2 p-3 rounded-2xl flex items-center text-gray-500 hover:-translate-1 transition-all duration-300 hover:bg-red-200/20 hover:shadow-md">
            <LogOut size={18} className="mr-5" />
            Logout
          </h1>
        </>
      </div>
    </>
  );
}

export default sidebar;
