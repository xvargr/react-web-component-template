import { io, Socket } from "socket.io-client";

export interface ISocketParams {
  name: string;
  url: string;
  options: {
    autoConnect?: boolean;
    extraHeaders: { "my-custom-header": string };
    auth: { token: string };
  };
  dispatches: {
    [key: string]: React.Dispatch<
      React.SetStateAction<{ [key: string]: boolean }>
    >;
    setConnection: React.Dispatch<
      React.SetStateAction<{ [key: string]: boolean }>
    >;
  };
}

export class UnitySocket {
  name: string;
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;
  // socket: Socket;
  dispatches;

  constructor({ name, url, options, dispatches }: ISocketParams) {
    this.name = name;
    this.socket = io(url, options);
    this.dispatches = dispatches;

    return this;
  }

  connect() {
    this.socket.connect();
    return this;
  }

  disconnect() {
    this.socket.disconnect();
    return this;
  }

  sendMessage() {
    console.warn("sendMessage not implemented");
  }
}
