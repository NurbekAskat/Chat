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
    if (data.length > 1) {
      setMessages((prev) => [...prev, ...data]);
    }
  };

  useEffect(() => {
    fetchMessage('');
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchMessage(messages[messages.length - 1].datetime);
      console.log('dsvdsc')
    }, 3000);

    return (
      clearInterval(interval)
    )
  }, [messages.length])




  return (
    <>
      <div className='container'>
        <MessageForm />
        <MessageList messages={messages} />
      </div>
    </>
  );
}

export default App;
