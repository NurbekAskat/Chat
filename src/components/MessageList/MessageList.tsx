import MessageItem from "../MessageItem/MessageItem";
import { messageType } from '../../types';
import React from "react";

interface Props {
    messages: messageType[]
}

const MessageList: React.FC<Props> = ({messages}) => {

  return (
    <div>
      <h5>Messages</h5>
      {     
        messages.map((message) => (
        <MessageItem key={message._id} author={message.author} message={message.message} date={message.datetime}/>
        ))
      }
    </div>
  );
};

export default MessageList;
