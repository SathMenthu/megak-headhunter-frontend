import React from 'react';
import { Star } from './Star';

interface Props {
  value: number;
}

export function StarList({ value }: Props) {
  const stars = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<Star isActive />);
    } else {
      stars.push(<Star isActive={false} />);
    }
  }
  return <>{stars.map((val) => val)}</>;
}
