import React from 'react';

export default function Contacts({ elements }) {
  console.log(elements);
  return (
    <ul>
      {elements.map(({ id, contact, number }) => (
        <li key={id}>
          User name: {contact} User phone: {number}
        </li>
      ))}
    </ul>
  );
}
