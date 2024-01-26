import { useState } from 'react';
import { GptMessage, MyMessage, TypingLoader, TextMessageBoxSelect } from '../../components';

interface Message {
  text: string;
  isGpt: boolean;
}

const languages = [
  { id: "alemán", text: "Alemán" },
  { id: "árabe", text: "Árabe" },
  { id: "bengalí", text: "Bengalí" },
  { id: "francés", text: "Francés" },
  { id: "hindi", text: "Hindi" },
  { id: "inglés", text: "Inglés" },
  { id: "japonés", text: "Japonés" },
  { id: "mandarín", text: "Mandarín" },
  { id: "portugués", text: "Portugués" },
  { id: "ruso", text: "Ruso" },
];

export const TranslatePage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string, selectedOption: string) => {

    setIsLoading(true);

    const newMessage = `Traduce: "${text}" al idioma ${selectedOption}`

    setMessages((prev) => [...prev, { text: newMessage, isGpt: false }]);

    //TODO: useCase

    setIsLoading(false);

    //TODO: isGpt =true

  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Welcome */}
          <GptMessage text="¿Qué quieres que traduzca hoy?" />

          {
            messages.map((message, index) => (
              message.isGpt
                ? (<GptMessage key={index} text={message.text} />)
                : (<MyMessage key={index} text={message.text} />)
            ))
          }

          {
            isLoading && (
              <div className="col-start-1 col-end-12">
                <TypingLoader />
              </div>
            )
          }

        </div>
      </div>

      <TextMessageBoxSelect
        onSendMessage={handlePost}
        placeholder="Escribe tu texto aquí"
        options={languages}
      />

    </div>
  );
};
