import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed/ChatFeed';
import LoginForm from './LoginForm/LoginForm';
import './App.css';

const projectID ='13209285-6377-4e71-91a1-c9e477456643';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;