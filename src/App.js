import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
  return(
    <ChatEngine
      height = "100vh"
      projectID = "d54115bd-bfda-44b5-ad90-8b8c1959b1fa"
      userName = "johnydoye"
      userSecret = "test123"
    />
  )
}

export default App;