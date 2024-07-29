// import React, { useEffect, useState } from 'react';
// import { fetchData } from './api';

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetchData();
//         console.log('Fetched data:', result); // Log fetched data
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data', error);
//       }
//     };

//     getData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from Backend</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>EmployeeID</th>
//             <th>FirstName</th>
//             <th>LastName</th>
//             <th>BirthDate</th>
//             <th>HireDate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(item => (
//             <tr key={item.EmployeeID}>
//               <td>{item.EmployeeID}</td>
//               <td>{item.FirstName}</td>
//               <td>{item.LastName}</td>
//               <td>{new Date(item.BirthDate).toLocaleDateString()}</td>
//               <td>{new Date(item.HireDate).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;


//new code 

import React, { useEffect, useState } from 'react';
import AddEmployeeForm from './AddEmployeeForm';
import axios from 'axios';



const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://api-kritan.learn.cloudlaya.com');
      return response.data;
    } catch (error) {
      console.error('Error fetching data', error);
      return [];
    }
  };

  const refreshData = async () => {
    const result = await fetchData();
    setData(result);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      <AddEmployeeForm refreshData={refreshData} />
      <table>
        <thead>
          <tr>
            <th>EmployeeID</th>
            <th>FirstName1</th>
            <th>LastName</th>
            <th>BirthDate</th>
            <th>HireDate</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.EmployeeID}>
              <td>{item.EmployeeID}</td>
              <td>{item.FirstName}</td>
              <td>{item.LastName}</td>
              <td>{new Date(item.BirthDate).toLocaleDateString()}</td>
              <td>{new Date(item.HireDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
