/* eslint-disable tailwindcss/no-custom-classname */
import { FormEvent, useState } from 'react';

interface Props {
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrections?: boolean;
}

export const TextMessageBox = ({ onSendMessage, placeholder, disableCorrections = false }: Props) => {

    const [message, setMessage] = useState('');

    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        if (message.trim().length === 0) return;

        onSendMessage(message);
        setMessage('');
    };

    return (
        <form
            onSubmit={handleSendMessage}
            className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4"
        >

            <div className="grow">
                <div className="relative w-full">
                    <input
                        type="text"
                        autoFocus
                        name="message"
                        className="flex h-10 w-full rounded-xl border pl-4 text-gray-800 focus:border-indigo-300 focus:outline-none"
                        placeholder={placeholder}
                        autoComplete={disableCorrections ? 'on' : 'off'}
                        autoCorrect={disableCorrections ? 'on' : 'off'}
                        spellCheck={disableCorrections ? 'true' : 'false'}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
            </div>

            <div className="ml-4">
                <button
                    type="submit"
                    className="btn-primary"
                >
                    <span className="mr-2">Enviar</span>
                    <i className="fa-regular fa-paper-plane"></i>
                </button>
            </div>

        </form>
    );
};
