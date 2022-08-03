import React from 'react';
import { HRPhoto } from './HRPhoto';
import { MyDropdown } from './MyDropdown';

export function HRMenu() {
  return (
    <div className="flex flex-row">
      <HRPhoto />
      <MyDropdown />;
    </div>
  );
}
