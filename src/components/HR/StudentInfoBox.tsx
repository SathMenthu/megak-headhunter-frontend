import React from 'react';

interface Props {
  header: string;
  value: number | string | boolean;
}

export function StudentInfoBox(props: Props) {
  const { header, value } = props;
  return (
    <div className="flex flex-col justify-between bg-HRblack p-2 font-extralight">
      <p className="items-start py-2">{header}</p>
      <p className="items-end py-2">
        {typeof value === 'number' ? (
          <>
            <span className="font-extrabold text-HRwhite">{value}</span> / 5
          </>
        ) : null}
        {typeof value === 'boolean' ? (
          <span className="font-extrabold text-HRwhite">
            {value ? 'TAK' : 'NIE'}
          </span>
        ) : null}
        {typeof value === 'string' ? (
          <span className="font-extrabold text-HRwhite">{value}</span>
        ) : null}
      </p>
    </div>
  );
}
