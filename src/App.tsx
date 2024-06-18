import { useState } from 'react';
import './App.css';
import { messageType } from './types';
import MessageList from './components/MessageList/MessageList';

const App = () => {
  const [messages, setMessages] = useState<messageType[]>([
    {  "_id": "5a3b8af7b96eb02c84d640bd",
        "message": "Hello, world!",
        "author": "Admin",
        "datetime": "2017-12-21T10:20:39.586Z"}
  ]);


  return (
    <>
      <div>
        <MessageList messages={messages}/>
      </div>
    </>
  );
}

export default App;
