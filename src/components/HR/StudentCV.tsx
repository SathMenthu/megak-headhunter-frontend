import React from 'react';
// eslint-disable-next-line import/no-cycle
import { HRMenuCallback } from '../../views/HR';
// eslint-disable-next-line import/no-cycle
// import { StudentCVCard } from './StudentCVCard';
import { StudentCVExtended } from './StudentCVExtended';
// eslint-disable-next-line import/no-cycle

interface Props {
  firstName?: string;
  id: string | null;
  callback: (value: HRMenuCallback) => void;
}

export function StudentCV({ id, firstName }: Props) {
  return (
    <div className="flex flex-row">
      {/* <StudentCVCard id={id} firstName={firstName} /> */}
      <StudentCVExtended id={id} firstName={firstName} />
    </div>
  );
}
