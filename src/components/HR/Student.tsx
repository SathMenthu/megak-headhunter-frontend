import React, { useState } from 'react';
import { Arrow2 } from './Arrow2';
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
  toTalk?: true;
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
        {student.toTalk && (
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="text-HRwhite text-xs font-thin text-red-300">
                Rezerwacja do:
              </p>
              <p className="text-HRwhite text-xs font-bold mt-2">
                {student.reservation_date}
              </p>
            </div>

            <div className="flex flex-row items-center ml-10">
              <img
                className="h-10 w-auto rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                alt="HR"
              />
              <p className="text-HRwhite ml-4">
                {student.name} {student.surname}
              </p>
            </div>
          </div>
        )}
        {!student.toTalk && <p className="text-HRwhite">{student.name}</p>}
        <div className="flex flex-row justify-between px-4 items-center">
          {!student.toTalk && <RedBtn title="Zarezerwuj rozmowę" />}
          {student.toTalk && (
            <div className="m-0">
              <RedBtn title="Pokaż CV" />
              <RedBtn title="Brak zainteresowania" />
              <RedBtn title="Zatrudniony" />
            </div>
          )}
          <button type="button" onClick={() => setIsActive(!isActive)}>
            <Arrow2 isActive={isActive} />
          </button>
        </div>
      </div>
      {isActive ? <StudentInfoBoxes student={props} /> : null}
    </div>
  );
}
