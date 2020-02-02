import React from 'react';

export default function FilterForm({ filterValue, onSearchQuery }) {

  return (
    <label>
      <input value={filterValue} onChange={onSearchQuery} />
    </label>
  );
}
