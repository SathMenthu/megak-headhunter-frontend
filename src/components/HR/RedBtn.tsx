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
        className="bg-HRred p-2 font-extralight text-HRwhite mx-5 h-10 text-sm hover:animate-pulse"
      >
        {title}
      </button>
    );
  }
  return (
    <button
      type="button"
      className="bg-HRred p-2 font-extralight text-HRwhite mx-5 h-10 text-sm hover:animate-pulse"
    >
      {title}
    </button>
  );
}
