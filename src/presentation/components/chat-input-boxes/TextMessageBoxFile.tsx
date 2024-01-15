/* eslint-disable tailwindcss/no-custom-classname */
import { FormEvent, useRef, useState } from 'react';

interface Props {
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrections?: boolean;
    accept?: string;
}

export const TextMessageBoxFile = ({ onSendMessage, placeholder, disableCorrections = false, accept }: Props) => {

    const [message, setMessage] = useState('');
    const [selectedFile, setSelectedFile] = useState<File|null>()
    const inputFileRef = useRef<HTMLInputElement>(null)

    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (message.trim().length === 0) return;
        onSendMessage(message);
        setMessage('');
    };

    return (
        <form onSubmit={handleSendMessage} className="flex h-16 w-full items-center space-x-3 rounded-xl bg-white px-4">

            <button
                type="button"
                className="text-xl text-gray-400 hover:text-gray-600"
                onClick={() => inputFileRef.current?.click()}
            >
                <i className="fa-solid fa-paperclip"></i>
            </button>

            <input 
                type="file"
                ref={inputFileRef}
                accept={accept}
                onChange={(e) => setSelectedFile(e.target.files?.item(0))}
                hidden
            />

            <input
                type="text"
                autoFocus
                name="message"
                className="h-10 grow rounded-xl border pl-4 text-gray-800 focus:border-indigo-300 focus:outline-none"
                placeholder={placeholder}
                autoComplete={disableCorrections ? 'on' : 'off'}
                autoCorrect={disableCorrections ? 'on' : 'off'}
                spellCheck={disableCorrections ? 'true' : 'false'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button
                type="submit"
                className="btn-primary ml-4"
                disabled={!selectedFile}
            >
                <span className="mr-2">
                    {!selectedFile ? 'Enviar' : `${selectedFile.name.substring(0,10)}...`}
                </span>
                <i className="fa-regular fa-paper-plane"></i>
            </button>

        </form>
    );
};