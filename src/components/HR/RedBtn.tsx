import React from 'react';
// eslint-disable-next-line import/no-cycle
import { HRMenuCallback } from '../../views/HR';

interface Props {
  title: string;
  showCV?: (value: HRMenuCallback) => void;
  firstName?: string;
  id?: string;
}

export function RedBtn(props: Props) {
  const { title, showCV, id } = props;
  if (showCV) {
    return (
      <button
        onClick={() => showCV({ setMenu: 'showCV', id })}
        type="button"
        className="bg-HRred p-2 font-extralight text-HRwhite mx-1 h-auto text-sm hover:animate-pulse"
      >
        {title}
      </button>
    );
  }
  return (
    <button
      type="button"
      className="bg-HRred p-2 font-extralight text-HRwhite mx-1 h-auto text-sm hover:animate-pulse my-2"
    >
      {title}
    </button>
  );
}
