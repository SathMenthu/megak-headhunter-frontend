import React from 'react';
import { StudentInfoBox } from './StudentInfoBox';

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
  student: {
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
  };
}

export function StudentInfoBoxes({ student }: Props) {
  return (
    <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRgrey overflow-x-auto">
      <StudentInfoBox
        header="Ocena przejścia kursu"
        value={student.courseCompletion}
      />
      <StudentInfoBox
        header="Ocena aktywności i zaangażowania na kursie"
        value={student.courseEngagment}
      />
      <StudentInfoBox
        header="Ocena kodu w projekcie własnym"
        value={student.projectDegree}
      />
      <StudentInfoBox
        header="Ocena pracy w zespole Scrum"
        value={student.teamProjectDegree}
      />
      <StudentInfoBox
        header="Preferowane miejsce pracy"
        value={ExpectedTypeWork[student.expectedTypeWork]}
      />
      <StudentInfoBox
        header="Docelowe miasto, gdzie chce pracować kandydat"
        value={student.targetWorkCity}
      />
      <StudentInfoBox
        header="Oczekiwany typ kontraktu"
        value={ExpectedContractType[student.expectedContractType]}
      />
      <StudentInfoBox
        header="Oczekiwane wynagrodzenie miesięczne netto"
        value={student.expectedSalary}
      />
      <StudentInfoBox
        header="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
        value={student.canTakeApprenticeship}
      />
      <StudentInfoBox
        header="Komercyjne doświadczenie w programowaniu"
        value={student.monthsOfCommercialExp}
      />
    </div>
  );
}
