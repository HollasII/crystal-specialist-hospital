import React, { useState } from 'react';
import { fetchZohoData } from './zoho.jsx';

const App = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Pass formData to fetchZohoData
      await fetchZohoData(formData);
      console.log('Data successfully sent to Zoho CRM');
      
      // Set success message
      setSuccessMessage('Appointment successfully made!');
      
      // Clear form fields
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
      });
    } catch (error) {
      console.error("Error in form submission:", error);
      setSuccessMessage('Failed to make appointment. Please try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Book an Appointment</h2>
        
        {/* Display success message */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        
        <form onSubmit={handleSubmit}>
          <label>
            Name: 
            <input 
              type="text" 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              required 
            />
          </label>
          
          <label>
            Email: 
            <input 
              type="email" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              required 
            />
          </label>
          
          <label>
            Date: 
            <input 
              type="date" 
              value={formData.date} 
              onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
              required 
            />
          </label>
          
          <label>
            Time: 
            <input 
              type="time" 
              value={formData.time} 
              onChange={(e) => setFormData({ ...formData, time: e.target.value })} 
              required 
            />
          </label>
          
          <div className="but">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
