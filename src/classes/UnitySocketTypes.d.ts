// socket.io event types
interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;

  // "whatsapp::receive_message": (data) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface WhatsappServerToClientEvents extends ServerToClientEvents {
  "whatsapp::receive_message": (data) => void;
}
interface WhatsappClientToServerEvents extends ClientToServerEvents {
  // "whatsapp::receive_message": (data) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

// socket data types
interface IConversationData {
  id: string;
  senderId: string;
  messages: IMessageData[];
}

interface IMessageData {
  id: string;
  timestamp: string;
  content: string;
}
