class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowerMessage = message.toLowerCase();

    if (
      lowerMessage.includes('shop') ||
      lowerMessage.includes('shop vehicle') ||
      lowerMessage.includes('shop a vehicle')
    ) {
      this.actionProvider.introInventory();
    }
  }
}

export default MessageParser;
