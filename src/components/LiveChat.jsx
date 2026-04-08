import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, X, Phone, ArrowRight } from 'lucide-react'
import { contact } from '../data/serviceAreas'

/* Conversation tree — keyed by node id */
const tree = {
  start: {
    bot: ["Hey 👋 I'm Charlie — your moving assistant.", "What can I help you with today?"],
    options: [
      { id: 'cost', label: '💰 How much will it cost?' },
      { id: 'areas', label: '📍 Where do you serve?' },
      { id: 'today', label: '📅 Available today?' },
      { id: 'how', label: '❓ How does this work?' },
      { id: 'deposit', label: '💳 Deposit / payment?' },
    ],
  },
  cost: {
    bot: [
      "Easy: $50/hr per mover, 1 hour minimum.",
      "A typical 2-mover, 2-hour move = $200. About 70% cheaper than full-service.",
      "Want to play with the calculator or get a real quote?",
    ],
    options: [
      { id: 'calc', label: '🧮 Open the calculator', action: 'scroll-calc' },
      { id: 'quote', label: '📝 Send me a quote', action: 'goto-quote' },
      { id: 'human', label: '💬 Talk to a human' },
    ],
  },
  areas: {
    bot: [
      "All of Charleston County 🌴",
      "Downtown, North Charleston, Mt Pleasant, James Island, John's Island, Folly, Sullivan's, IOP, West Ashley, Daniel Island — plus Summerville, Hanahan, Goose Creek and Moncks Corner.",
      "Same flat rate everywhere.",
    ],
    options: [
      { id: 'today', label: '📅 Are you free today?' },
      { id: 'quote', label: '📝 Get a quote', action: 'goto-quote' },
      { id: 'human', label: '💬 Talk to a human' },
    ],
  },
  today: {
    bot: [
      "Probably yes — we work 7 days a week, 8 AM to 9 PM.",
      "Same-day moves are usually possible if you book before noon. After noon, we'll fit you in the next day.",
      "Want me to check availability with the team?",
    ],
    options: [
      { id: 'human', label: '📞 Yes — call or text me' },
      { id: 'quote', label: '📝 Send the request', action: 'goto-quote' },
    ],
  },
  how: {
    bot: [
      "Super simple. We're labor-only — meaning:",
      "1️⃣ You rent a U-Haul (or Penske / Budget)",
      "2️⃣ We bring 2-4 movers and do all the lifting, loading & unloading",
      "3️⃣ You pay just $50/hr per mover when the job's done",
      "By skipping the truck/markup, you save 50–70% vs full-service movers.",
    ],
    options: [
      { id: 'cost', label: '💰 What\'s the cost?' },
      { id: 'quote', label: '📝 Get a real quote', action: 'goto-quote' },
      { id: 'human', label: '💬 Talk to a human' },
    ],
  },
  deposit: {
    bot: [
      "Zero deposit. Never. 💯",
      "You only pay when the move is finished. We accept Venmo, Zelle, Cash App, cash, or card.",
    ],
    options: [
      { id: 'quote', label: '📝 Sounds good — get me a quote', action: 'goto-quote' },
      { id: 'human', label: '💬 Talk to a human' },
    ],
  },
  human: {
    bot: [
      "Easy — call or text us. We're real people and pick up fast.",
      `${contact.phone}`,
      "8 AM – 9 PM, 7 days a week.",
    ],
    options: [
      { id: 'call', label: `📞 Call ${contact.phone}`, action: 'call' },
      { id: 'quote', label: '📝 Or send your details', action: 'goto-quote' },
      { id: 'restart', label: '↩️ Back to start' },
    ],
  },
}

export default function LiveChat() {
  const [open, setOpen] = useState(false)
  const [hasUnread, setHasUnread] = useState(true)
  const [messages, setMessages] = useState([])
  const [currentNode, setCurrentNode] = useState('start')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const initialized = useRef(false)

  // Show greeting after 2 seconds on first open
  useEffect(() => {
    if (open && !initialized.current) {
      initialized.current = true
      pushBotMessages(tree.start.bot, () => setCurrentNode('start'))
    }
    if (open) setHasUnread(false)
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, typing])

  function pushBotMessages(lines, onDone) {
    let idx = 0
    setTyping(true)
    const next = () => {
      if (idx >= lines.length) {
        setTyping(false)
        onDone?.()
        return
      }
      setTimeout(() => {
        setMessages((m) => [...m, { from: 'bot', text: lines[idx] }])
        idx += 1
        next()
      }, 600 + Math.random() * 400)
    }
    next()
  }

  function selectOption(opt) {
    // Add user reply
    setMessages((m) => [...m, { from: 'user', text: opt.label }])

    // Handle special actions
    if (opt.action === 'call') {
      window.location.href = contact.phoneHref
      return
    }
    if (opt.action === 'goto-quote') {
      setTimeout(() => {
        setOpen(false)
        window.location.href = '/quote'
      }, 500)
      return
    }
    if (opt.action === 'scroll-calc') {
      setOpen(false)
      const el = document.getElementById('calculator')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    const nodeId = opt.id === 'restart' ? 'start' : opt.id
    const node = tree[nodeId]
    if (!node) return
    pushBotMessages(node.bot, () => setCurrentNode(nodeId))
  }

  const node = tree[currentNode]

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3 bg-navy text-white pl-4 pr-5 py-4 rounded-full shadow-2xl shadow-navy/40 hover:shadow-navy/60 transition-all hover:-translate-y-1"
          aria-label="Open chat"
        >
          <div className="relative">
            <MessageCircle size={22} />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </span>
            )}
          </div>
          <span className="text-sm font-bold hidden sm:inline">Chat with Charlie</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[60] w-[calc(100vw-3rem)] max-w-sm sm:max-w-[380px] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl shadow-navy/40 border border-navy/10 flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-navy text-white p-5 flex items-center gap-3 relative">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-lg font-bold">
                C
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-navy rounded-full" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">Charlie</div>
              <div className="text-xs text-white/70 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                Online · replies instantly
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-navy-50/30 to-white">
            {messages.map((m, i) => (
              <Message key={i} from={m.from} text={m.text} />
            ))}
            {typing && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {!typing && node?.options && (
            <div className="border-t border-navy/10 p-3 bg-white">
              <div className="flex flex-wrap gap-2 max-h-[180px] overflow-y-auto no-scrollbar">
                {node.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => selectOption(opt)}
                    className="px-3 py-2 bg-navy/5 hover:bg-navy hover:text-white text-navy text-xs font-semibold rounded-full transition-all"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {/* Bottom escape hatch */}
              <div className="mt-3 pt-3 border-t border-navy/5 flex gap-2">
                <a
                  href={contact.phoneHref}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  <Phone size={12} /> Call
                </a>
                <Link
                  to="/quote"
                  onClick={() => setOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-navy hover:bg-navy-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Get quote <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

function Message({ from, text }) {
  const isBot = from === 'bot'
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-slide-up`}>
      {isBot && (
        <div className="w-7 h-7 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mr-2">
          C
        </div>
      )}
      <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
        isBot
          ? 'bg-white border border-navy/10 text-navy rounded-tl-sm'
          : 'bg-navy text-white rounded-tr-sm'
      }`}>
        {text}
      </div>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs">C</div>
      <div className="bg-white border border-navy/10 px-4 py-3 rounded-2xl rounded-tl-sm">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
