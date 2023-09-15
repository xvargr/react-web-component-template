import Conversation from "../components/Conversation";
import MessageClass from "./MessageClass";

/**
 * this is the class that defines a single conversation in a thread,
 * it contains all the messages sent between the current user and
 * a single recipient
 */
export default class ConversationClass {
  id: string;
  senderId: string;
  messages: object;

  constructor(conversationData: IConversationData) {
    const messageObjects: IMessageData[] = [];
    conversationData.messages.forEach((messageData) => {
      const message = new MessageClass(messageData);
      messageObjects.push(message);
    });

    this.id = conversationData.id;
    this.senderId = conversationData.senderId;
    this.messages = messageObjects;

    return this;
  }

  get conversationLink() {
    return <Conversation conversationObject={this} />;
  }
}
