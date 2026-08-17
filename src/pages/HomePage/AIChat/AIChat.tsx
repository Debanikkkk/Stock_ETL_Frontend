import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import '../HomePage.css'
import styles from './AIChat.module.css'

type Message = { sender: 'user' | 'bot'; text: string }

const AIChat = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: 'Hi — I am your demo AI assistant. Ask me about your portfolio.' }
    ])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        // ensure this runs only in browser
        return () => {}
    }, [])

    const send = () => {
        if (!input.trim()) return
        const text = input.trim()
        setMessages((m) => [...m, { sender: 'user', text }])
        setInput('')

        // Hardcoded reply logic for demo purposes
        setTimeout(() => {
            let reply = "I'm a demo AI — integration coming soon."
            const lower = text.toLowerCase()
            if (lower.includes('performance') || lower.includes('trend')) {
                reply = 'Your portfolio is showing steady growth over the last 12 months in this demo view.'
            } else if (lower.includes('best') || lower.includes('best performer') || lower.includes('top')) {
                reply = 'NVDA is the best performer in this sample dataset.'
            } else if (lower.includes('help')) {
                reply = 'Try asking about performance, best performer, or holdings.'
            } else {
                reply = `Demo response: I heard "${text}".`
            }

            setMessages((m) => [...m, { sender: 'bot', text: reply }])
        }, 300)
    }

    // Create portal container
    const [portalEl] = useState(() => {
        if (typeof document === 'undefined') return null
        const el = document.createElement('div')
        return el
    })

    useEffect(() => {
        if (!portalEl) return
        document.body.appendChild(portalEl)
        return () => {
            document.body.removeChild(portalEl)
        }
    }, [portalEl])

    if (!portalEl) return null

    const widget = (
        <div className={styles.widget} aria-live="polite">
            {!open ? (
                <button aria-label="Open chat" className={styles.fab} onClick={() => setOpen(true)}>
                    <span className={styles.fabIcon}>🤖</span>
                </button>
            ) : (
                <div className={styles.panel} role="dialog" aria-label="AI chat panel">
                    <div className={styles.panelHeader}>
                        <div>
                            <p className="glass-card__eyebrow">AI assistant</p>
                            <h3 className="glass-card__title">Ask the demo assistant</h3>
                        </div>
                        <div>
                            <button aria-label="Minimize chat" className={styles.minButton} onClick={() => setOpen(false)}>_</button>
                        </div>
                    </div>

                    <div className={styles.messages}>
                        {messages.map((m, i) => (
                            <div key={i} className={styles.messageRow}>
                                <strong className={m.sender === 'bot' ? styles.botLabel : styles.userLabel}>{m.sender === 'bot' ? 'AI' : 'You'}:</strong>
                                <span className={styles.messageText}>{m.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.inputRow}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something..."
                            className={styles.input}
                            onKeyDown={(e) => { if (e.key === 'Enter') send() }}
                        />
                        <button type="button" onClick={send} className={styles.sendButton}>Send</button>
                    </div>
                </div>
            )}
        </div>
    )

    return createPortal(widget, portalEl)
}

export default AIChat
