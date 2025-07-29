/**
 * ChatAssistant - Stateless, strictly typed chat assistant for diagnostics, reporting, and feedback
 * @component
 * @see ../../docs/AUTHORITATIVE.md
 * @see ../../PLANNING.md
 */
import React, { useState } from "react";
import axios from "axios";
/**
 * ChatAssistant - Stateless, strictly typed chat assistant for diagnostics, reporting, and feedback
 * @component
 * @see ../../docs/AUTHORITATIVE.md
 * @see ../../PLANNING.md
 */
const ChatAssistant = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    /**
     * Handles user input and queries backend endpoints for diagnostics/reporting
     */
    const handleSend = async () => {
        if (!input.trim())
            return;
        setLoading(true);
        setMessages([...messages, { role: 'user', text: input }]);
        let responseText = '';
        try {
            if (input.toLowerCase().includes('policy')) {
                const res = await axios.get('/JSSResource/policies');
                const policies = Array.isArray(res.data) ? res.data : [];
                responseText = `Found ${policies.length} policies.`;
            }
            else if (input.toLowerCase().includes('profile')) {
                const res = await axios.get('/JSSResource/osxconfigurationprofiles');
                const profiles = res.data;
                responseText = `Found ${profiles.length} profiles.`;
            }
            else if (input.toLowerCase().includes('approval')) {
                const res = await axios.get('/api/v1/approval');
                const approvals = res.data;
                responseText = `Approval workflow: ${approvals.length} items.`;
            }
            else if (input.toLowerCase().includes('feedback')) {
                const res = await axios.get('/api/v1/feedback');
                const feedback = res.data;
                responseText = `Feedback count: ${feedback.length}.`;
            }
            else {
                responseText = 'Sorry, I can only help with policies, profiles, approval workflow, or feedback.';
            }
        }
        catch (err) {
            responseText = 'Error fetching data.';
        }
        setMessages([...messages, { role: 'user', text: input }, { role: 'assistant', text: responseText }]);
        setInput('');
        setLoading(false);
    };
    return (<div className="p-4 border rounded bg-white shadow-md max-w-lg mx-auto">
            <h2 className="text-xl font-bold mb-2">Jamf Pro Chat Assistant</h2>
            <div className="mb-2 h-48 overflow-y-auto bg-gray-50 p-2 rounded">
                {messages.map((msg, idx) => (<div key={idx} className={msg.role === 'user' ? 'text-right text-blue-700' : 'text-left text-green-700'}>
                        <span className="block mb-1">{msg.text}</span>
                    </div>))}
                {loading && <div className="text-gray-400">Loading...</div>}
            </div>
            <div className="flex">
                <input type="text" value={input} onChange={e => setInput(e.target.value)} className="flex-1 border p-2 rounded mr-2" placeholder="Ask about policies, profiles, approval, feedback..." aria-label="Chat input"/>
                <button onClick={handleSend} className="px-4 py-2 bg-blue-500 text-white rounded" disabled={loading}>
                    Send
                </button>
            </div>
        </div>);
};
export default ChatAssistant;
