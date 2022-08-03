import React from 'react';
// eslint-disable-next-line import/no-cycle
import { HRMenuCallback, StateOfMenu } from '../../views/HR';

interface Props {
  title: string;
  value: StateOfMenu;
  isActive?: boolean;
  onActive: (value: HRMenuCallback) => void;
}

export function MenuItem(props: Props) {
  const { title, isActive, onActive, value } = props;
  const underline = (
    <div className="bg-HRred-100 h-1 w-auto relative top-5 animate-pulse" />
  );
  return (
    <div
      className={
        isActive ? 'text-HRwhite font-light' : 'text-HRgrey font-light'
      }
    >
      <button
        type="button"
        className="px-6"
        onClick={() => onActive({ setMenu: value })}
      >
        {title}
      </button>
      {isActive ? underline : null}
    </div>
  );
}
