import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-retro-fire text-retro-light h-16 p-1 flex gap-2 items-center">
        <UserCircleIcon className="h-full shrink-0" />
        <span className="font-semibold">{agent_name}</span>
      </div>

      <div className="bg-gray-300 grow overflow-auto scrollbar-light">
        {/* {message.bubble()} */}
      </div>
    </div>
  );
}
