import React from 'react';
import { Arrow } from './Arrow';

interface Props {
  direction?: 'left' | 'right';
  isActive?: boolean;
}

export function PaginationBtn({ isActive, direction }: Props) {
  const classNameBtn = `h-6 w-6 mx-2 flex justify-center items-center ${
    isActive ? 'bg-HRgrey' : 'bg-HRgrey-300'
  } ${direction === 'right' ? 'rotate-180' : ''}`;
  return (
    <button type="button" className={classNameBtn}>
      <Arrow color="#333333" />
    </button>
  );
}
