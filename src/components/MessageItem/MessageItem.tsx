import React from "react";
import { messageType } from '../../types';

interface Props {
    message: messageType
}

const MessageItem: React.FC<Props> = ({ message }) => {
    const messageDate = new Date(message.datetime);
    let dformat = [messageDate.getDate(),
    messageDate.getMonth() + 1,
    messageDate.getFullYear()].join('.') + ' ' +
        [messageDate.getHours(),
        messageDate.getMinutes(),
        messageDate.getSeconds()].join(':');

    return (
        <div className="row mt-2 alert alert-light">
            <strong className="col-6">Author: {message.author}</strong>
            <span className="col-6">Date: {dformat}</span>
            <p className="col-12 mt-3">Message: {message.message}</p>
        </div>
    );
};

export default MessageItem;
