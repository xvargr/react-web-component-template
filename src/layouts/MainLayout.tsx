import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  // todo flash or toast here
  // todo modals here

  return (
    <div className="bg-retro-light w-full h-full grid grid-cols-10 grid-rows-1">
      <div className="col-start-1 col-span-4 @2xl:col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-6 @2xl:col-span-7">
        <Outlet />
      </div>
    </div>
  );
}
