import { createChatBotMessage } from 'react-chatbot-kit';

import IntroductoryOptions from './options/IntroductoryOptions';

const config = {
  botName: 'Digital Assistant',
  initialMessages: [
    createChatBotMessage('Welcome to Carstro chatbot! How can we help you?', {
      widget: 'introductoryOptions',
    }),
  ],
  widgets: [
    {
      widgetName: 'introductoryOptions',
      widgetFunc: (props) => <IntroductoryOptions {...props} />,
    },
  ],
};

export default config;
