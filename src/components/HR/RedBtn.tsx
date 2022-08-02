import React from 'react';

interface Props {
  title: string;
}

export function RedBtn(props: Props) {
  const { title } = props;
  return (
    <button
      type="button"
      className="bg-HRred p-2 font-extralight text-HRwhite mx-5 h-10 text-sm hover:animate-pulse"
    >
      {title}
    </button>
  );
}
