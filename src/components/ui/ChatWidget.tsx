
"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
  Minimize2,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "Tell me about JC.",
  "What are his technical skills?",
  "Show me his projects.",
  "Tell me about his work experience.",
];

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey there! 👋 I'm JC's AI portfolio assistant. I can tell you about his background, technical skills, projects, and professional experience. What would you like to know?",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    INITIAL_MESSAGE,
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = async (value?: string) => {
    const message = (value ?? input).trim();

    if (!message || loading) return;

    const updatedMessages: Message[] = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.slice(1),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to get a response."
        );
      }

      if (typeof data.message !== "string") {
        throw new Error("Invalid response from the server.");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
   } catch (error) {
      console.error("Chat error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting to my AI service right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white text-black shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:bg-neutral-200 active:scale-95"
      >
        {isOpen ? (
          <X size={23} />
        ) : (
          <MessageCircle size={23} />
        )}

        {!isOpen && (
          <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-[#0b0b0b] bg-green-500" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[min(600px,calc(100dvh-8rem))] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_20px_80px_rgba(0,0,0,0.5)] sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#151515] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
                <Bot size={22} />

                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#151515] bg-green-500" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Chat with JC
                </h3>

                <p className="mt-0.5 text-xs text-neutral-500">
                  AI Portfolio Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="mr-2 flex items-center gap-1.5 text-[11px] text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Online
              </span>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Minimize chat"
                className="rounded-lg p-2 text-neutral-500 transition hover:bg-white/5 hover:text-white"
              >
                <Minimize2 size={17} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 space-y-5 overflow-y-auto overscroll-contain p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            {/* Welcome Message */}
            <div className="flex items-start gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                <Bot size={16} />
              </div>

              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-[#202020] px-4 py-3 text-sm leading-relaxed text-neutral-300">
                {INITIAL_MESSAGE.content}
              </div>
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="ml-10 space-y-2">
                <div className="mb-3 flex items-center gap-2 text-xs text-neutral-500">
                  <Sparkles size={13} />
                  Suggested questions
                </div>

                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void sendMessage(suggestion)}
                    disabled={loading}
                    className="block w-full rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 text-left text-xs text-neutral-300 transition duration-200 hover:border-white/30 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Conversation */}
            {messages.slice(1).map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <Bot size={16} />
                  </div>
                )}

                <div
                  className={`max-w-[80%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-tr-sm bg-white text-black"
                      : "rounded-tl-sm bg-[#202020] text-neutral-300"
                  }`}
                >
                  {message.content}
                </div>

                {message.role === "user" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {loading && (
              <div className="flex items-start gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                  <Bot size={16} />
                </div>

                <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm bg-[#202020] px-4 py-3 text-xs text-neutral-400">
                  <Loader2
                    size={14}
                    className="animate-spin"
                  />
                  JC's assistant is thinking...
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Message Input */}
          <div className="border-t border-white/10 bg-[#151515] p-4">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#1b1b1b] px-3 py-2 transition focus-within:border-white/30">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask me anything..."
                  disabled={loading}
                  maxLength={2000}
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-neutral-600 disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-black transition duration-200 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  {loading ? (
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                  ) : (
                    <Send size={16} />
                  )}
                </button>
              </div>
            </form>

            <p className="mt-3 text-center text-[10px] text-neutral-600">
              Powered by AI · Built for JC's portfolio
            </p>
          </div>
        </div>
      )}
    </>
  );
}
