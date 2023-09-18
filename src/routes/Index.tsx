import { Link } from "react-router-dom";
import { useContext } from "react";
import { ConnectionContext } from "../context/ConnectionContext";

export default function Index() {
  const { connections, connectionStatus, allConnected } =
    useContext(ConnectionContext);

  console.log("ws conn", connectionStatus.whatsapp);
  // connection.connections.whatsapp.sendMessage();

  return (
    <div className="flex flex-col">
      <h1>Index</h1>
      <Link to="conversation">Conversation</Link>
      <Link to="conversation/error">throw error in conversation</Link>
      <Link to="404">throw 404</Link>
    </div>
  );
}
