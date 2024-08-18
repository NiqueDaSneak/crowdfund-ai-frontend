import React, { useState } from 'react';
import { navigate } from 'gatsby';

const DemoLoginModal = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        'https://scoutai.netlify.app/.netlify/functions/verifyInviteCode',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        },
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(result.message);
        navigate('/campaign');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An error occurred while verifying the code.');
    }
  };

  return (
    <div className="full-screen-modal">
      <div className="modal-content">
        <p className="modal-title">Enter Your Demo Invite Code</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="invite-code-input"
            placeholder="Enter code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="submit-button">Submit</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default DemoLoginModal;
