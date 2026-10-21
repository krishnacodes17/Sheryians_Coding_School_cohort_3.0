import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [socket] = useState(() => io("http://localhost:5000"));
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const socketInstance = socket;

    socketInstance.on("connect", () => {
      console.log("Connected:", socketInstance.id);
      setConnected(true);
    });

    socketInstance.on("disconnect", () => {
      setConnected(false);
    });

    socketInstance.on("musk", (data) => {
      setMessages((prev) => [
        ...prev,
        {
          id: data.id,
          text: data.data,
          isMe: data.id === socketInstance.id,
        },
      ]);
    });

    socketInstance.on("connect_error", (error) => {
      console.error("Connection error:", error.message);
      setConnected(false);
    });  

    return () => {
      socketInstance.disconnect();
    };
  }, [socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!socket.connected || !message.trim()) return;

    socket.emit("user-message", message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold tracking-tight text-center">
        Socket.IO Chat
      </h1>

      <div className="flex items-center gap-2 mt-3 text-sm">
        <span
          className={`inline-block h-2 w-2 rounded-full ${
            connected ? "bg-white animate-pulse" : "bg-neutral-500"
          }`}
        />
        <span className="text-neutral-400">
          {connected ? "Connected" : "Disconnected"}
        </span>
      </div>

      <div className="w-full max-w-2xl mt-8 flex-1 flex flex-col bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex-1 overflow-y-auto p-5 space-y-3 min-h-[320px] max-h-[55vh]">
          {messages.length === 0 && (
            <p className="text-neutral-500 text-center mt-24">
              No messages yet. Say hello!
            </p>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.isMe ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-[15px] leading-snug break-words ${
                  msg.isMe
                    ? "bg-white text-black rounded-br-md"
                    : "bg-neutral-800 text-neutral-200 border border-neutral-700 rounded-bl-md"
                }`}
              >
                <span className="block text-[11px] font-semibold uppercase tracking-wider opacity-60 mb-1">
                  {msg.isMe ? "You" : "Server"}
                </span>
                {msg.text}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-neutral-700 p-4 bg-neutral-900">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
            />

            <button
              onClick={sendMessage}
              disabled={!connected || !message.trim()}
              className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-neutral-200 active:scale-95 transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
