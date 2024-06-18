import { useEffect, useState } from 'react';
import './App.css';
import { messageType } from './types';
import MessageList from './components/MessageList/MessageList';
import MessageForm from './components/MessageForm/MessageForm';

const App = () => {
  const [messages, setMessages] = useState<messageType[]>([]);

  const fetchMessage = async (date: string) => {
    const url = `http://146.185.154.90:8000/messages?datetime=${date}`;
    const response = await fetch(url);
    const data = await response.json();
    setMessages((prev) => [...prev, data]);
  };

  useEffect(() => {
    fetchMessage('');
    console.log('kkk')
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessage(messages[messages.length - 1].datetime);
    }, 2000);
    console.log('VVV')
    return (
      clearInterval(interval)
    )
  }, [messages])


  return (
    <>
      <div>
        <MessageList messages={messages} />
        <MessageForm />
      </div>
    </>
  );
}

export default App;
