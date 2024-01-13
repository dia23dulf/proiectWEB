import React from 'react';
import Navbar from './layout/Navbar';

export default function Program() {
  // Presupunem că ai datele despre mentorii și lspv disponibile într-un array
  const data = [
    { luna: 'Ianuarie', mentor1: 'Mentor1-Ianuarie', mentor2: 'Mentor2-Ianuarie', mentor3: 'Mentor3-Ianuarie', lspv: 'LSPV-Ianuarie' },
    // Adaugă date pentru celelalte luni aici
  ];

  return (
    <div className='container'>
      <div className='py-4'>
        <Navbar />
        <table className='table'>
          <thead>
            <tr>
              <th>Luna</th>
              <th>Mentor 1</th>
              <th>Mentor 2</th>
              <th>Mentor 3</th>
              <th>LSPV</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.luna}</td>
                <td>{item.mentor1}</td>
                <td>{item.mentor2}</td>
                <td>{item.mentor3}</td>
                <td>{item.lspv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
