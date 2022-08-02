import React from 'react';
import { Arrow } from './Arrow';

export function Pagination() {
  return (
    <div className="container mx-auto flex flex-row  place-content-end my-2 text-HRgrey text-sm items-center">
      <p className="mx-2 font-light">Ilość elementów</p>
      <select className="mx-2 bg-HRblack text-sm">
        <option value="1">10</option>
        <option value="2">20</option>
        <option value="3">30</option>
        <option value="4">40</option>
      </select>
      <p className="mx-5 font-light">10 z 40</p>
      <div className="flex flex-row justify-center items-center">
        <button
          type="button"
          className="h-6 w-6 bg-HRblack-100 mx-2 flex justify-center items-center"
        >
          <Arrow />
        </button>
        <button
          type="button"
          className="h-6 w-6 bg-HRwhite rotate-180 flex justify-center items-center"
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}
