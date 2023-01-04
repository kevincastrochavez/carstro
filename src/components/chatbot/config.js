import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: 'Digital Assistant',
  initialMessages: [
    createChatBotMessage('Welcome to Carstro chat! How can we help you'),
  ],
};

export default config;
