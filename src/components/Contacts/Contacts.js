import React from 'react';

export default function Contacts({ elements, onRemoveContacts }) {
  console.log(elements);
  return (
    <ul>
      {elements.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onRemoveContacts(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
