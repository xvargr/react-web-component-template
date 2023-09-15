import MessageClass from "../classes/MessageClass";

interface IMessageProps {
  messageObject: MessageClass;
}

export default function Message(messageProps: IMessageProps) {
  const { messageObject } = messageProps;

  return (
    <div className="bg-slate-500">
      <div>{messageObject.content}</div>
      <div>{messageObject.timestamp}</div>
      <div>hello there general</div>
    </div>
  );
}
