import React, { useState } from 'react';
import { fetchZohoData } from './zoho.jsx';

const  App = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const zohoData = await fetchZohoData();
          console.log('Data from Zoho CRM:', zohoData);
          
        } catch (error) {
          console.error("Error in form submission:", error);
        }
      };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label>Name: <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required /></label>
          <label>Email: <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required /></label>
          <label>Date: <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required /></label>
          <label>Time: <input type="time" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} required /></label>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default App;