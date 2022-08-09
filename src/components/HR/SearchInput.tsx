import React, { useState } from 'react';
import { Magnifier } from './Magnifier';

export function SearchInput() {
  const [search, setSearch] = useState('');
  return (
    <div className="relative flex flex-row bg-HRblack">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <Magnifier />
      </span>
      <input
        type="text"
        className="bg-HRblack h-7 w-80 border-none text-HRgrey p-3 pl-9 placeholder:font-light font-light placeholder:text-HRgrey-300"
        placeholder="Szukaj"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
