import Message from "../components/Message";

export default class MessageClass {
  id: string;
  content: string;
  timestamp: string; // todo other types of content

  constructor(messageData: IMessageData) {
    this.id = messageData.id;
    this.content = messageData.content;
    this.timestamp = messageData.timestamp;

    return this;
  }

  bubble() {
    return <Message messageObject={this} />;
  }
}
