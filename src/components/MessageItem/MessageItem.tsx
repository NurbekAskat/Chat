import React from "react";

interface Props {
    author: string
    message: string
    date: string
}

const MessageItem: React.FC<Props> = ({ author, message, date }) => {
    return (
        <div>
            <strong>{author}</strong>
            <p>{message}</p>
            <span>{date}</span>
        </div>
    );
};

export default MessageItem;
