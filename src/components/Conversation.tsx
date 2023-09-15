import { Link } from "react-router-dom";
import ConversationClass from "../classes/ConversationClass";

interface IConversationProps {
  conversationObject: ConversationClass;
}

export default function Conversation(conversationProps: IConversationProps) {
  const { conversationObject } = conversationProps;

  return (
    <Link to={`conversation/${conversationObject.id}`} className="bg-gray-800">
      Conversation
    </Link>
  );
}
