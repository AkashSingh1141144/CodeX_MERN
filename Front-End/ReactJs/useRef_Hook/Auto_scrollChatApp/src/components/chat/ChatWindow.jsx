import { useRef, useEffect, useState } from "react";

function ChatWindow() {
  const [messages, setMessages] = useState([
    "Hello 👋",
    "How are you?",
    "This is a chat app!",
  ]);

  const lastMessageRef = useRef(null);

  // Scroll to last message whenever messages change
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    setMessages((prev) => [...prev, "New message at " + new Date().toLocaleTimeString()]);
  };

  return (
    <div className="flex flex-col items-center mt-10 text-black">
      <div className="w-96 h-80 overflow-y-auto border rounded-md p-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            ref={index === messages.length - 1 ? lastMessageRef : null}
            className="p-2 mb-2 bg-blue-100 rounded-md"
          >
            {msg}
          </div>
        ))}
      </div>
      <button
        onClick={sendMessage}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Send Message
      </button>
    </div>
  );
}

export default ChatWindow;
