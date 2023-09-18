import { Socket, io } from "socket.io-client";
import { ISocketParams, UnitySocket } from "./UnitySocket";

export class Whatsapp extends UnitySocket {
  socket: Socket<WhatsappServerToClientEvents, WhatsappClientToServerEvents>;

  constructor({ name, url, options, dispatches }: ISocketParams) {
    super({ name, url, options, dispatches });

    this.socket = io(url, options);

    this.socket.on("connect", () => {
      console.log(`${this.name} connected`);
      dispatches.setConnection((prevStatus) => {
        return { ...prevStatus, [this.name]: true };
      });
    });

    this.socket.on("disconnect", () => {
      console.log(`${this.name} disconnected`);
      dispatches.setConnection((prevStatus) => {
        return { ...prevStatus, [this.name]: false };
      });
    });

    this.socket.on("whatsapp::receive_message", (data) => {
      console.log("data", data);
    });
  }
}
