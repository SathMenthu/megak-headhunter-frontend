import React from 'react';
import { HRMenu } from './HRMenu';
import { HRPhoto } from './HRPhoto';
import { MKLogo } from './MKLogo';

export function Header() {
  return (
    <div className="w-screen bg-HRblack">
      <div className="w-screen mx-auto container px-0 py-3 flex flex-row justify-between">
        <MKLogo />
        <div className="flex flex-row">
          <HRPhoto />
          <HRMenu />
        </div>
      </div>
    </div>
  );
}
