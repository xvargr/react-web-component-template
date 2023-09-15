import { Outlet } from "react-router-dom";

export default function ConversationLayout() {
  return (
    <div>
      <p>Conversation layout</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
