"use client";

import { useState, useRef, useEffect } from "react";

// Define what a message looks like
type Message = {
  role: "bot" | "user";
  text: React.ReactNode;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState("");
  
  // 1. State to hold our chat messages
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: (
        <>
          Hi! I'm an AI assistant trained on Vineeth's portfolio and resume. 
          <br/><br/>
          Want to know more about his experience with <strong>Apache Airflow</strong>, <strong>LangChain</strong>, or his <strong>Healthcare data pipelines</strong>?
        </>
      ),
    },
  ]);

  // Ref to help us auto-scroll to the bottom of the chat
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

  // Auto-scroll whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // Handle Drag Physics
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    dragStart.current = { x: e.clientX, y: e.clientY };
    initialPos.current = { ...position };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current.x && !dragStart.current.y) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      isDragging.current = true;
      setPosition({
        x: initialPos.current.x + dx,
        y: initialPos.current.y + dy,
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStart.current = { x: 0, y: 0 };
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleClick = () => {
    if (!isDragging.current) {
      setIsOpen(!isOpen);
    }
  };

  // 2. Handle Submitting a Message
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add the user's message to the chat
    setMessages((prev) => [...prev, { role: "user", text: inputValue }]);
    setInputValue(""); // Clear the input field

    // 3. Simulate a Bot Response 1 second later
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Hi. That's a great question! I am currently a demo version running on the frontend. To see Vineeth's actual technical skills in action, check out his Featured Projects or connect with him directly on LinkedIn!",
        },
      ]);
    }, 1000);
  };

  return (
    <>
      <style>{`
        @keyframes eye-blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .animate-blink {
          animation: eye-blink 4s infinite ease-in-out;
          transform-origin: center;
        }
      `}</style>

      <div 
        className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10 flex flex-col items-end touch-none"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        
        {/* The Chat Window */}
        {isOpen && (
          <div className="mb-4 flex h-[400px] w-[320px] flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl transition-all sm:w-[380px]">
            <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900/80 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                <h3 className="font-semibold text-gray-200">Vineeth's AI Assistant</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 transition hover:text-gray-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 4. Map through the messages dynamically */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex w-full items-start gap-3 text-sm ${msg.role === "user" ? "justify-end" : ""}`}>
                  
                  {/* Bot Avatar (only show for bot messages) */}
                  {msg.role === "bot" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div className={`rounded-2xl px-4 py-3 ${
                    msg.role === "bot" 
                      ? "rounded-tl-none bg-gray-800 text-gray-300" 
                      : "rounded-tr-none bg-cyan-600 text-white"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {/* Invisible div to help us scroll to the bottom */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-800 bg-gray-900 p-3">
              <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..." 
                  className="w-full rounded-full border border-gray-700 bg-gray-800 px-4 py-2 text-sm text-gray-200 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500" 
                />
                <button type="submit" disabled={!inputValue.trim()} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white transition hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}

        {/* The Draggable Smiley Bot */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onClick={handleClick}
          className="group relative flex h-14 w-14 cursor-grab items-center justify-center rounded-full border border-white/40 bg-gradient-to-br from-cyan-300 via-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(34,211,238,0.5)] backdrop-blur-md active:cursor-grabbing hover:scale-105 transition-transform"
        >
          <div className="absolute inset-1 rounded-full border border-white/30 bg-white/10 pointer-events-none"></div>
          
          {isOpen ? (
            <svg className="h-6 w-6 text-white drop-shadow-md z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative z-10 flex flex-col items-center justify-center gap-1 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              <div className="flex gap-2">
                <div className="h-2.5 w-2 rounded-full bg-slate-900 animate-blink"></div>
                <div className="h-2.5 w-2 rounded-full bg-slate-900 animate-blink"></div>
              </div>
              <svg className="w-4 h-2 text-slate-900" viewBox="0 0 22 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <path d="M2 2 Q 12 12 22 2" />
              </svg>
            </div>
          )}
        </div>

      </div>
    </>
  );
}