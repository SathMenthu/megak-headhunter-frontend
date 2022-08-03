import React from 'react';
import { StarList } from './StarList';

interface Props {
  header: string;
  value: number | string | boolean | undefined;
  stars?: boolean;
}

export function StudentInfoBox(props: Props) {
  const { header, value, stars } = props;
  return (
    <div className="flex flex-col justify-between bg-HRblack p-2 font-extralight">
      <p className="items-start py-2 text-HRgrey">{header}</p>
      <p className="items-end py-2">
        {typeof value === 'number' ? (
          <div className="flex flex-row text-HRgrey-100 items-center">
            <span className="font-extrabold text-HRwhite">{value} </span>
            <span className="mr-4">&nbsp;/ 5</span>
            {stars && <StarList value={value} />}
          </div>
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
