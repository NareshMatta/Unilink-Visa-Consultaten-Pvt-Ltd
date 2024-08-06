import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button-1">×</button>
        <h2>Book Your Free Assistance</h2>
        <form>
          <label>
            First Name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Mobile:
            <input type="tel" name="mobile" required />
          </label>
          <label>
            Book a Time Slot:
            <select name="timeSlot" required>
              <option value="10-1">10:00 AM to 11:30 AM</option>
              <option value="10-1">11:30 AM to 12:30 PM</option>
              <option value="10-1">12:30 PM to 1:30 PM</option>
              <option value="10-1">3:00 PM to 4:00 PM</option>
              <option value="10-1">4:00 PM to 5:30 PM</option>
              <option value="10-1">5:30 PM to 6:30 PM</option>
            </select>
          </label>
          <label>
            Select a Day:
            <select name="day" required>
              <option value="">Select a Day</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
