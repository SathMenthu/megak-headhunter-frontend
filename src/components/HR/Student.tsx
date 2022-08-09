import React, { useState } from 'react';
import { Arrow2 } from './Arrow2';
// eslint-disable-next-line import/no-cycle
import { RedBtn } from './RedBtn';
import { StudentInfoBoxes } from './StudentInfoBoxes';

export enum ExpectedTypeWork {
  'Na miejscu',
  'Gotowość do przeprowadzki',
  'Wyłącznie zdalnie',
  'Hybrydowo',
  'Bez znaczenia',
}

export enum ExpectedContractType {
  'Tylko UoP',
  'Możliwe B2B',
  'Możliwe UZ/UoD',
  'Brak preferencji',
}

export interface Props {
  showCV?: () => void;
  toTalk?: boolean;
  surname?: string;
  reservation_date?: string;
  name: string;
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: ExpectedTypeWork;
  targetWorkCity: string;
  expectedContractType: ExpectedContractType;
  expectedSalary: string;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: string;
}

export function Student(props: Props) {
  const [isActive, setIsActive] = useState(false);
  const student = props;
  return (
    <div className="flex flex-col my-1">
      <div className="flex flex-row justify-between px-4 items-center h-16">
        <p className="text-HRwhite font-light">{student.name}</p>
        <div className="flex flex-row justify-between px-4 items-center">
          <RedBtn title="Zarezerwuj rozmowę" />
          <button type="button" onClick={() => setIsActive(!isActive)}>
            <Arrow2 isActive={isActive} />
          </button>
        </div>
      </div>
      {isActive ? <StudentInfoBoxes student={props} /> : null}
    </div>
  );
}
