import React, { useState } from 'react';
import './Feedback.css'; // Ensure you have Feedback.css in the same directory
import feedbackImage from '../../assets/feedback.jpg'; // Import the image

const Feedback = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [slideIn, setSlideIn] = useState(false);

  const handleMouseEnter = () => {
    setSlideIn(true);
  };

  const handleMouseLeave = () => {
    setSlideIn(false);
  };

  const handleFeedbackClick = () => {
    setShowFeedback(prev => !prev); // Toggle the state
    setSlideIn(prev => !prev); // Toggle the slide-in state
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleSubmit = async () => {
    if (selectedEmoji && feedbackText) {
      try {
        const response = await fetch('http://localhost:5000/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emoji: selectedEmoji, text: feedbackText }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
        }

        alert('Feedback submitted successfully!');
        setSelectedEmoji('');
        setFeedbackText('');
        setShowFeedback(false);
        setSlideIn(false);
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit feedback. Check console for more details.');
      }
    } else {
      alert('Please select an emoji and enter your feedback.');
    }
  };

  return (
    <div
      className="feedback-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={feedbackImage}
        alt="Feedback"
        className={`feedback-image ${slideIn ? 'slide-in' : ''}`}
        onClick={handleFeedbackClick}
      />
      <div className={`feedback-panel ${showFeedback ? 'show' : ''}`}>
        <div className="emoji-popover">
          <div className="emoji-label">
            <span
              role="img"
              aria-label="Excellent"
              className={`emoji ${selectedEmoji === '😊' ? 'selected' : ''}`}
              onClick={() => handleEmojiClick('😊')}
            >
              😊
            </span>
            <span className="label">Excellent</span>
          </div>
          <div className="emoji-label">
            <span
              role="img"
              aria-label="Good"
              className={`emoji ${selectedEmoji === '😄' ? 'selected' : ''}`}
              onClick={() => handleEmojiClick('😄')}
            >
              😄
            </span>
            <span className="label">Good</span>
          </div>
          <div className="emoji-label">
            <span
              role="img"
              aria-label="OK"
              className={`emoji ${selectedEmoji === '😐' ? 'selected' : ''}`}
              onClick={() => handleEmojiClick('😐')}
            >
              😐
            </span>
            <span className="label">OK</span>
          </div>
        </div>
        <div className="feedback-input">
          <input
            type="text"
            placeholder="Give your feedback..."
            value={feedbackText}
            onChange={handleFeedbackChange}
          />
          <button className="submit-button-2" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
