import { io, Socket } from "socket.io-client";

export interface ISocketParams {
  url: string;
  options: {
    autoConnect?: boolean;
    extraHeaders: { "my-custom-header": string };
    auth: { token: string };
  };
}

export class UnitySocket {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>;

  constructor({ url, options }: ISocketParams) {
    this.socket = io(url, options);

    this.socket.onAny((eventName, ...args) => {
      console.log(eventName, ...args);
    });

    this.socket.on("connect", () => {
      console.log("connected");
    });

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
