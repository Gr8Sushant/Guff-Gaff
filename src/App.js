import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
  return(
    <ChatEngine
      height = "100vh"
      projectID = "enter_your_own_id"
      userName = "enter_your_own_uname"
      userSecret = "enter_your_own_pw"
    />
  )
}

export default App;
