import React from 'react';

interface Props {
  title: string;
  value: string;
  isActive?: boolean;
  onActive: (value: string) => void;
}

export function MenuItem(props: Props) {
  const { title, isActive, onActive, value } = props;
  const underline = (
    <div className="bg-HRred h-1 w-auto relative top-5 animate-pulse" />
  );
  return (
    <div className={isActive ? 'text-HRwhite' : 'text-HRgrey'}>
      <button type="button" className="px-6" onClick={() => onActive(value)}>
        {title}
      </button>
      {isActive ? underline : null}
    </div>
  );
}
