import { ChatEngine } from 'react-chat-engine';
import './App.css';
import Discution from './components/Discution'
import LoginForm from './components/LoginForm';


// Fonction de composants

const App = () => {

  if (!localStorage.getItem('username')) {
    return <LoginForm />
  }

  return (
    <ChatEngine 
      height="100vh" 
      projectID="628e3c6d-e382-4191-90be-0607a003aa6c" 
      userName={localStorage.getItem('username')} 
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <Discution{...chatAppProps} />}

      onConnect={(creds) => console.log(creds)}
			onFailAuth={(props) => console.log(props)}
			onNewChat={(chat) => console.log(chat)}
			onEditChat={(chat) => console.log(chat)}
			onDeleteChat={(chat) => console.log(chat)}
			onNewMessage={(chatId, message) => console.log(chatId, message)}
			onEditMessage={(chatId, message) => console.log(chatId, message)}
			onDeleteMessage={(chatId, message) => console.log(chatId, message)}
       />
  );
}

export default App;



