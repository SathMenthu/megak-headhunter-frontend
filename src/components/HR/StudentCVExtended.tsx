import React from 'react';
import { Clip } from './Clip';
import {
  StudentToTalk,
  arrayOfStudentsToTalk,
} from './Placeholder_StudentsToTalk';
// eslint-disable-next-line import/no-cycle
import { StudentInfoBox } from './StudentInfoBox';
import { ExpectedContractType, ExpectedTypeWork } from './StudentInfoBoxes';

interface Props {
  firstName?: string;
  id: string | null;
}

export function StudentCVExtended({ id }: Props) {
  const student = arrayOfStudentsToTalk.find(
    (value) => value.id === id,
  ) as StudentToTalk;
  return (
    <div className="border-l-HRblack border-l-4">
      <h2 className="text-HRwhite ml-4 py-3">Oceny</h2>
      <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRgrey overflow-x-auto bg-HRblack pl-2">
        <StudentInfoBox
          header="Ocena przejścia kursu"
          value={student.courseCompletion}
          stars
        />
        <StudentInfoBox
          header="Ocena aktywności i zaangażowania na kursie"
          value={student.courseEngagment}
          stars
        />
        <StudentInfoBox
          header="Ocena kodu w projekcie własnym"
          value={student.projectDegree}
          stars
        />
        <StudentInfoBox
          header="Ocena pracy w zespole Scrum"
          value={student.teamProjectDegree}
          stars
        />
      </div>

      <h2 className="text-HRwhite ml-4 py-3">
        Oczekiwanie w stosunku do zatrudnienia
      </h2>
      <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRgrey overflow-x-auto bg-HRblack pl-2">
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
      <h2 className="text-HRwhite ml-4 py-3">Edukacja</h2>
      <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRgrey bg-HRblack px-3 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim
        ipsam. Cum ipsum eaque, quod natus accusantium nam commodi ut
        dignissimos tempora debitis, ea blanditiis nesciunt a? Nam, quas
        eveniet.
      </div>
      <h2 className="text-HRwhite ml-4 py-3">Kursy</h2>
      <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRgrey bg-HRblack px-3 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim
        ipsam. Cum ipsum eaque, quod natus accusantium nam commodi ut
        dignissimos tempora debitis, ea blanditiis nesciunt a? Nam, quas
        eveniet.
      </div>
      <h2 className="text-HRwhite ml-4 py-3">Doświadczenie zawodowe</h2>
      <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRgrey bg-HRblack px-3 py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim
        ipsam. Cum ipsum eaque, quod natus accusantium nam commodi ut
        dignissimos tempora debitis, ea blanditiis nesciunt a? Nam, quas
        eveniet.
      </div>
      <h2 className="text-HRwhite ml-4 py-3">Portfolio</h2>
      <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRblue bg-HRblack px-3 py-4">
        <Clip />
        <span className="my-auto">https://Loremipsum/dolor/sit/amet</span>
      </div>
      <h2 className="text-HRwhite ml-4 py-3">Projekt w zespole Scrumowym</h2>
      <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRblue bg-HRblack px-3 py-4">
        <Clip />
        <span className="my-auto">https://Loremipsum/dolor/sit/amet</span>
      </div>
      <h2 className="text-HRwhite ml-4 py-3">Projekt na zaliczenie</h2>
      <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRblue bg-HRblack px-3 py-4">
        <Clip />
        <span className="my-auto">https://Loremipsum/dolor/sit/amet</span>
      </div>
    </div>
  );
}
