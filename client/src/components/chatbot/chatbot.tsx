import React, { useState, useEffect, useRef } from 'react';
import { Container, Input, Button, Comment, Segment } from 'semantic-ui-react';

interface ChatMessage {
  from: 'user' | 'bot';
  text: string;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { from: 'user' as const, text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { from: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { from: 'bot', text: 'Error: no response' }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Error: failed to fetch' }]);
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Container style={{ marginTop: 20, maxWidth: 600 }}>
      <Segment raised style={{ height: '60vh', overflowY: 'auto', padding: '1em' }}>
        <Comment.Group>
          {messages.map((msg, idx) => (
            <Comment key={idx}>
              <Comment.Content>
                <Comment.Author as="a">
                  {msg.from === 'user' ? 'You' : 'Advisor Bot'}
                </Comment.Author>
                <Comment.Text style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
          <div ref={messagesEndRef} />
        </Comment.Group>
      </Segment>

      <Input
        fluid
        placeholder="Ask your financial advisor..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        action
        disabled={loading}
      >
        <input />
        <Button onClick={sendMessage} primary loading={loading} disabled={loading || !input.trim()}>
          Send
        </Button>
      </Input>
    </Container>
  );
};

export default ChatbotPage;
