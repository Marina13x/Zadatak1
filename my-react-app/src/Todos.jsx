import React, { useState, useEffect } from 'react';
import okImage from './assets/Complete.png'

function Todos(){
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setToDo(data));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {toDo.map(toDo1 => (
            <tr key={toDo1.id}>
              <td>{toDo1.id}</td>
              <td>{toDo1.title}</td>
              <td>
                {toDo1.completed ? (
                  <img className='small-image' src={okImage} alt='Complete' />
                ) : (
                  ''
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todos;
