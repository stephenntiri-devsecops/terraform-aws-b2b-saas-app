import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('jwt');
      const res = await axios.get('/api/appointments', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAppointments(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map(app => (
          <li key={app.id}>{app.time} - {app.client}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
