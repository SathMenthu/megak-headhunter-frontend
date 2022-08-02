import React from 'react';

interface Props {
  title: string;
  showCV?: (value: string) => void;
}

export function RedBtn(props: Props) {
  const { title, showCV } = props;
  if (showCV) {
    return (
      <button
        onClick={() => showCV('showCV')}
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
