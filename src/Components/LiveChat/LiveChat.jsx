// LiveChat.jsx
import React, { useState } from 'react';
import './LiveChat.css';
import assistant from '../../assets/message.jpeg'; // Adjust the path as necessary

const LiveChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState(["Welcome to UniLink-Visa! How Can I Help You?"]);
  const [queryOptionsShown, setQueryOptionsShown] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: '', mobile: '', email: '' });
  const [waitingForDetails, setWaitingForDetails] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = (message) => {
    const updatedChatHistory = [...chatHistory, message];
    setChatHistory(updatedChatHistory);

    if (!queryOptionsShown) {
      setChatHistory([...updatedChatHistory, 'Please select your query from the dropdown.']);
      setQueryOptionsShown(true);
    } else if (message === '1') {
      setChatHistory([...updatedChatHistory, 'Please wait, the agent will connect in 1 minute.']);
    } else if (message === '2') {
      setChatHistory([...updatedChatHistory, 'Enter your details: name, mobile, and email.']);
      setWaitingForDetails(true);
    } else if (waitingForDetails) {
      const details = message.split(', ');
      if (details.length === 3) {
        setUserDetails({ name: details[0], mobile: details[1], email: details[2] });
        setChatHistory([...updatedChatHistory, 'Our customer care will call you within 5 minutes.']);
        setWaitingForDetails(false);
      } else {
        setChatHistory([...updatedChatHistory, 'Please enter all details: name, mobile, and email.']);
      }
    }
  };

  const handleInputChange = (event) => {
    if (event.key === 'Enter') {
      handleSend(event.target.value);
      event.target.value = '';
    }
  };

  const handleDropdownChange = (event) => {
    setSelectedQuery(event.target.value);
    handleSend(event.target.value);
  };

  return (
    <div className="live-chat-container">
      <div className="chat-icon" onClick={toggleChat}>
        <img src={assistant} alt="Live Assistance" className="chat-icon-image" />
        <span className="live-assistance-text">
          
          <span className="live-dot"></span>
        </span>
      </div>
      {isChatOpen && (
        <div className={`chat-box ${isChatOpen ? 'slide-in' : 'slide-out'}`}>
          <div className="chat-header">
            <h4>Live Chat Support</h4>
          </div>
          <div className="chat-body">
            {chatHistory.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <div className="chat-footer">
            {!queryOptionsShown ? (
              <input type="text" placeholder="Type your message here..." onKeyDown={handleInputChange} />
            ) : (
              <select value={selectedQuery} onChange={handleDropdownChange} className="chat-dropdown">
                <option value="">Select your query</option>
                <option value="1">Chat With Agent</option>
                <option value="2">Customer Care</option>
              </select>
            )}
            {!queryOptionsShown && <button onClick={() => handleSend(document.querySelector('.chat-footer input').value)}>Send</button>}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
