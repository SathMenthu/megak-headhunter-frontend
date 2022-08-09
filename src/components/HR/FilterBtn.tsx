import React from 'react';
import { Funnel } from './Funnel';

export function FilterBtn() {
  return (
    <div className="flex flex-row bg-HRblack items-center hover:animate-pulse">
      <Funnel />
      <button type="button" className="p-2 text-HRgrey text-sm font-light">
        Filtrowanie
      </button>
    </div>
  );
}
