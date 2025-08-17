import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <div className='bg-gradient-to-tr from-green-500 to-blue-500 p-4 rounded-md shadow-lg text-white font-bold w-5/6 mx-auto my-36 text-center h-auto text-2xl'>
        <div className='p-2'>
          <SearchBar
        query={query}
        onChange={handleChange}
      />
        </div>
      <hr />
      <div className='p-2 text-gray-700 text-xl'>
        <List items={results} />
      </div>
      </div>
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody> 
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
