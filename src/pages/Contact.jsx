import { useState } from 'react';

import './Contact.css'

function ResendEmailButton() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    if (!message || !name || !email) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('http://localhost:3001/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        message: JSON.stringify({ message }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
    } catch (e) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='contact-form'>
      <h1>Contact</h1>
      <label>Name</label>
      <input
        className='name-input'
        type="text"
        placeholder='Firstname Lastname'
        value={name}
        required
        onChange={e => setName(e.target.value)}
      />
      <label>Email Address</label>
      <input
        className='email-input'
        type="email"
        placeholder="example@email.com"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
      />
      <label>Message</label>
      <textarea
        className='message-textarea'
        placeholder="Enter your message here..."
        value={message}
        required
        onChange={e => setMessage(e.target.value)}
      />
      <button className='message-send-button' onClick={handleResend} disabled={loading}>
        {loading ? 'Sending' : 'Send'}
      </button>
      {status === 'success' && <p className='message-toast'>Contact request sent successfully!</p>}
      {status === 'error' && <p className='message-toast'>Something went wrong.</p>}
      {!status && <p className='placeholder'>&nbsp;</p>}
    </form>
  );
}

export default ResendEmailButton;
