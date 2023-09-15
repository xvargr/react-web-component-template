import { useContext } from "react";

import { Link } from "react-router-dom";
import { WhatsappContext } from "../context/WhatsappContext";

export default function Index() {
  const whatsapp = useContext(WhatsappContext);

  if (!whatsapp.isConnected) {
    return <div>connecting...</div>;
  }

  return (
    <div className="flex flex-col">
      <h1>Index</h1>
      <Link to="conversation">Conversation</Link>
      <Link to="conversation/error">throw error in conversation</Link>
      <Link to="404">throw 404</Link>
    </div>
  );
}
