/**import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

const App = () => {
  return (
    <Router>
      <p>Hello Mina</p>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

///
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://13.215.207.67:3001/api/data', { name, description });
      alert('Data added successfully!');
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding data:', error);
      alert('Error adding data');
    }
  };

  return (
    <div className="App">
      <h1>Add Data to MySQL via React and Node.js</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Give Description Please:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Dataa</button>
      </form>
    </div>
  );
}

export default App;**/

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://13.215.207.67:3001/api/data', { name, description });
//       alert('Data added successfully!');
//       setName('');
//       setDescription('');
//     } catch (error) {
//       console.error('Error adding data:', error.response ? error.response.data : error.message);
//       alert('Error adding data: ' + (error.response ? error.response.data.error : error.message));
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Add Data to MySQL via React and Node.js</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Give Description Please:
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Add Data</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-mina.learn.cloudlaya.com/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api-mina.learn.cloudlaya.com/api/data', { name, description });
      alert('Data added successfully!');
      setName('');
      setDescription('');
      fetchData(); // Fetch data again to update the list
    } catch (error) {
      console.error('Error adding data:', error.response ? error.response.data : error.message);
      alert('Error adding data: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <div className="App">
      <h1>Add Data to MySQL via React and Node.js</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Give Description Please:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Data</button>
      </form>
      
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name} <br />
            <strong>Description:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


