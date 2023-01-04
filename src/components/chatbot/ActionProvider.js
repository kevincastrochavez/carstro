class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setStateFunc = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setStateFunc((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  introInventory = () => {
    window.location.href =
      'http://localhost:3000/inventory?minPrice=23499&maxPrice=420000&minMileage=1300&maxMileage=240483';
  };

  handleChatRepresentative = () => {
    const message = this.createChatbotMessage(
      'We have the best sales representatives just for you!',
      {
        widget: 'representativeOptions',
      }
    );

    this.addMessageToState(message);
  };
}

export default ActionProvider;
