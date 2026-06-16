"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MessageCircle, X, Send, ArrowRight, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/site/logo";
import { cn } from "@/lib/utils";

type TopicId = "what" | "channels" | "pricing" | "integrations" | "security" | "demo";

const TOPICS: Record<
  TopicId,
  { label: string; answer: string; cta?: boolean; suggest: TopicId[] }
> = {
  what: {
    label: "What does Hyventur do?",
    answer:
      "Hyventur is the modern payment platform built for collections and receivables. We give your consumers a clean way to pay — by portal, text, phone, or plan — so you recover more, stay compliant, and stop fighting your tools.",
    suggest: ["channels", "pricing", "demo"],
  },
  channels: {
    label: "How do consumers pay?",
    answer:
      "However they prefer: a branded self-service portal, Text2Pay SMS links, IVR pay-by-phone, an agent virtual terminal, or flexible payment plans and settlements — all in one platform.",
    suggest: ["security", "integrations", "demo"],
  },
  pricing: {
    label: "How does pricing work?",
    answer:
      "Pricing is custom and transparent — quoted to your volume, with no per-module fees that stack up. You can see how we compare on our pricing page, or I can connect you for a quick quote.",
    suggest: ["what", "demo"],
  },
  integrations: {
    label: "What can it integrate with?",
    answer:
      "45+ systems — collection platforms like Finvi and Latitude, CRMs like Salesforce and HubSpot, accounting like QuickBooks and NetSuite, plus Twilio, Plaid, and more — and a modern REST API for anything custom.",
    suggest: ["security", "demo"],
  },
  security: {
    label: "Is it secure & compliant?",
    answer:
      "Security is the quiet default: PCI DSS Level 1 infrastructure, tokenization and encryption, and FDCPA / Reg F-aware workflows built in — so you're protected and compliant without the daily worry.",
    suggest: ["channels", "demo"],
  },
  demo: {
    label: "Book a demo",
    answer:
      "Love it. The best way to see Hyventur is a 30-minute walkthrough mapped to your operation. Tap below to book one.",
    cta: true,
    suggest: [],
  },
};

const INITIAL_SUGGEST: TopicId[] = ["what", "pricing", "integrations", "security"];

type Msg = { role: "bot" | "user"; text: string; cta?: boolean };

function matchTopic(input: string): TopicId {
  const s = input.toLowerCase();
  if (/(price|pricing|cost|fee|quote|how much)/.test(s)) return "pricing";
  if (/(integrat|connect|crm|salesforce|finvi|quickbook|api)/.test(s)) return "integrations";
  if (/(secur|complian|pci|fdcpa|reg f|safe|encrypt)/.test(s)) return "security";
  if (/(pay|portal|text|ivr|phone|channel|consumer|plan|settle)/.test(s)) return "channels";
  if (/(demo|call|talk|sales|contact|meeting|walkthrough)/.test(s)) return "demo";
  return "what";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! 👋 I'm the Hyventur assistant. Ask me anything — or pick a question below.",
    },
  ]);
  const [suggest, setSuggest] = useState<TopicId[]>(INITIAL_SUGGEST);
  const [input, setInput] = useState("");
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function answer(id: TopicId, userText: string) {
    const t = TOPICS[id];
    setMessages((m) => [
      ...m,
      { role: "user", text: userText },
      { role: "bot", text: t.answer, cta: t.cta },
    ]);
    setSuggest(t.suggest.length ? t.suggest : INITIAL_SUGGEST);
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    answer(matchTopic(text), text);
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="fixed bottom-5 right-5 z-[60] inline-flex size-14 items-center justify-center rounded-full bg-crimson-600 text-white shadow-lg transition-all hover:bg-crimson-700 hover:shadow-xl active:scale-95"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-[60] flex h-[520px] max-h-[72vh] w-[370px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-ink-950 px-4 py-3.5 text-white">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-white">
                <BrandMark className="size-5" />
              </span>
              <div className="flex-1">
                <p className="text-[0.92rem] font-semibold leading-tight">Hyventur Assistant</p>
                <p className="flex items-center gap-1 text-[0.72rem] text-ink-300">
                  <span className="size-1.5 rounded-full bg-emerald-400" /> Typically replies instantly
                </p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-lg p-1 text-ink-300 hover:bg-white/10 hover:text-white">
                <X className="size-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-mist px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[0.85rem] leading-relaxed",
                      m.role === "user"
                        ? "rounded-br-sm bg-crimson-600 text-white"
                        : "rounded-bl-sm bg-white text-ink-700 shadow-sm ring-1 ring-ink-100",
                    )}
                  >
                    {m.text}
                    {m.cta && (
                      <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg bg-crimson-600 px-3 py-1.5 text-[0.8rem] font-semibold text-white"
                      >
                        Book a demo <ArrowRight className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick replies */}
              {suggest.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {suggest.map((id) => (
                    <button
                      key={id}
                      onClick={() => answer(id, TOPICS[id].label)}
                      className="inline-flex items-center gap-1 rounded-full border border-crimson-200 bg-white px-3 py-1.5 text-[0.78rem] font-medium text-crimson-700 transition-colors hover:bg-crimson-50"
                    >
                      {id === "demo" && <Sparkles className="size-3" />}
                      {TOPICS[id].label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-ink-100 bg-white px-3 py-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question…"
                className="flex-1 rounded-lg border border-ink-200 bg-white px-3 py-2 text-[0.85rem] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-crimson-400"
              />
              <button
                onClick={handleSend}
                aria-label="Send"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-crimson-600 text-white transition-colors hover:bg-crimson-700"
              >
                <Send className="size-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
