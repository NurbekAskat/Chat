import MessageItem from "../MessageItem/MessageItem";
import { messageType } from '../../types';
import React from "react";

interface Props {
    messages: messageType[]
}

const MessageList: React.FC<Props> = ({ messages }) => {

    return (
        <div>
            <h5>Messages</h5>
            <div className="d-flex flex-column-reverse">
                {
                    messages.map((message) => (
                        <MessageItem key={message._id} message={message} />
                    ))
                }
            </div>
        </div>
    );
};

export default MessageList;
