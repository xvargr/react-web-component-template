import ConversationClass from "./ConversationClass";

/**
 * this is the class that stores all the currently active conversations
 * of the current user with all recipients
 */
export default class ThreadClass {
  static #instance: ThreadClass | null;

  #conversations: ConversationClass[] = [];
  #populated = false;

  static initialize() {
    if (ThreadClass.#instance) {
      throw new Error("ThreadClass is already instantiated");
    }

    ThreadClass.#instance = new ThreadClass();
  }

  populate(threadData: IConversationData[]) {
    threadData.forEach((conversationData) => {
      const conversation = new ConversationClass(conversationData);
      this.#conversations.push(conversation);
    });

    this.#populated = true;
  }

  destroy() {
    ThreadClass.#instance = null;
  }

  static get instance() {
    if (!ThreadClass.#instance) {
      throw new Error("ThreadClass is not instantiated");
    }

    return ThreadClass.#instance;
  }

  get isPopulated() {
    return this.#populated;
  }
}
