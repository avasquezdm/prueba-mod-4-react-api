import React, { useState, useEffect } from 'react';
import "./MiApi.css"

const MiApi = () => { 
  
  
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = async () => {
    try {
      const response = await fetch('https://api.victorsanmartin.com/feriados/en.json');
      const data = await response.json();
      setHolidays(data.data);
    } catch (error) {
      console.log('Error fetching holidays:', error);
    }
  };



  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredHolidays = holidays.filter((holiday) =>
    holiday.extra.toLowerCase().includes(searchValue.toLowerCase())
  );




  const [sortOrder, setSortOrder] = useState(''); 

  const handleSortByDate = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  
  const sortedHolidays = [...filteredHolidays].sort((a, z) => {
    if (sortOrder === 'asc') {
      return new Date(a.date) - new Date(z.date);
    } else {
      return new Date(z.date) - new Date(a.date);
    }
  });

  return (
    <div>
      <div className='filter-bar'>
        <label>Búsqueda </label>
        <input
          type="text"
          placeholder="Religioso, Civil, Irrenunciable..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {sortedHolidays.map((holiday) => (
            <tr key={holiday.date}>
              <td>{holiday.date}</td>
              <td>{holiday.title}</td>
              <td>{holiday.extra}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleSortByDate}>Ordenar por fecha</button>
    </div>
  );
};

export default MiApi;
