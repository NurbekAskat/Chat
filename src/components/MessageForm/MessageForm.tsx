import React, { useState } from "react";

const initialState = {
    message: '',
    author: ''
};

const MessageForm = () => {
    const [message, setMessage] = useState(initialState);

    const onChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setMessage((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const url = 'http://146.185.154.90:8000/messages';

        const data = new URLSearchParams();
        data.set('message', message.message);
        data.set('author', message.author);

        const response = await fetch(url, {
            method: 'post',
            body: data,
        });

        setMessage(initialState);
    };

    return (
        <div className="mb-5">
            <h1>Send Message</h1>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label>
                        Message:
                        <input
                            type="text"
                            name="message"
                            onChange={onChange}
                            value={message.message}
                            required
                            className="form-control"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Author:
                        <input
                            type="text"
                            name="author"
                            onChange={onChange}
                            required
                            value={message.author}
                            className="form-control"
                        />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Send</button>
            </form>
        </div>
    );
};

export default MessageForm;
