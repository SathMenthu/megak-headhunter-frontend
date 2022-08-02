import React from 'react';
import { FilterBtn } from './FilterBtn';
import { SearchInput } from './SearchInput';

export function FindMenu() {
  return (
    <div className="flex flex-row h-6 my-4 justify-between items-center">
      <SearchInput />
      <FilterBtn />
    </div>
  );
}
