class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('see inventory')) {
      this.actionProvider.introInventory();
    }

    if (lowerMessage.includes('inventory')) {
      this.actionProvider.introInventory();
    }
  }
}

export default MessageParser;
