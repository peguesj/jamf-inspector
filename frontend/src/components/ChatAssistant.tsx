// /frontend/src/components/ChatAssistant.tsx
import React, { useState } from 'react';

/**
 * ChatMessage represents a single message in the chat assistant.
 * @see /types/chat.ts for authoritative type definitions.
 */
export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

/**
 * useChatAssistant is a custom hook for managing chat state and logic.
 * @returns { messages, input, setInput, sendMessage }
 */
export const useChatAssistant = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (!input.trim()) return;
        const userMessage: ChatMessage = {
            id: `${Date.now()}-user`,
            role: 'user',
            content: input.trim(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        // TODO: Integrate AI assistant logic here (API call, etc.)
        // For now, echo a placeholder assistant response:
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: `${Date.now()}-assistant`,
                    role: 'assistant',
                    content: 'This is a placeholder response from the AI assistant.',
                },
            ]);
        }, 600);
    };

    return { messages, input, setInput, sendMessage };
};

/**
 * ChatAssistant is a stateless, functional UI component that uses the useChatAssistant hook.
 * Renders the chat UI and handles user input.
 * @see /docs/PLANNING.md for requirements and standards.
 */
const ChatAssistant: React.FC = () => {
    const { messages, input, setInput, sendMessage } = useChatAssistant();

    return (
        <div>
            <div>
                {messages.map(msg => (
                    <div key={msg.id}>
                        <strong>{msg.role}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message"
                aria-label="Chat input"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatAssistant;

/**
 * Example usage in a component:
 * 
 * import useChatAssistant from './ChatAssistant';
 * 
 * const ChatUI = () => {
 *   const { messages, input, setInput, sendMessage } = useChatAssistant();
 *   return (
 *     <div>
 *       <div>
 *         {messages.map(msg => (
 *           <div key={msg.id}>
 *             <strong>{msg.role}:</strong> {msg.content}
 *           </div>
 *         ))}
 *       </div>
 *       <input
 *         value={input}
 *         onChange={e => setInput(e.target.value)}
 *         placeholder="Type your message"
 *       />
 *       <button onClick={sendMessage}>Send</button>
 *     </div>
 *   );
 * };
*/