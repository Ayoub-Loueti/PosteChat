import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import Homepage from "./Pages/Homepage";

function App() {
  useEffect(() => {document.title = 'PosteChat'}, []);
  return (
    <div className="App">
      <Route path='/' component={ Homepage } exact/>
      <Route path='/chats' component={ ChatPage } />
    </div>
  );
}

export default App;
