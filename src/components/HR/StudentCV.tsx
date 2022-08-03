import React from 'react';
import {
  StudentToTalk,
  arrayOfStudentsToTalk,
} from './Placeholder_StudentsToTalk';
// eslint-disable-next-line import/no-cycle
import { RedBtn } from './RedBtn';
import { StudentInfoBox } from './StudentInfoBox';
import { ExpectedContractType, ExpectedTypeWork } from './StudentInfoBoxes';

interface Props {
  firstName?: string;
  id: string | null;
}

export function StudentCV({ id }: Props) {
  const student = arrayOfStudentsToTalk.find(
    (value) => value.id === id,
  ) as StudentToTalk;
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-52 p-3 text-HRwhite">
        <a href="/hr" className="relative left-[-5rem]">
          Wróć
        </a>
        <img
          className="h-24 w-24 rounded-full place-self-center mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="HR"
        />
        <h2 className="place-self-center text-HRwhite ml-4 py-3">
          {student.firstName} {student.surname}
        </h2>
        <img
          className="h-5 w-5 rounded-full place-self-center mb-4 "
          src="/images/GitHub-Mark-Light-64px.png"
          alt="github logo"
        />
        <a
          href="https://github.com"
          className="place-self-center text-HRwhite ml-4 py-3 text-HRblue"
        >
          github
        </a>
        <p className="place-self-center mb-2 text-HRwhite ml-4 py-3">
          +48 566 072 227
        </p>
        <p className="place-self-center mb-2 text-HRwhite ml-4 py-3">
          jankowalski@gmail.com
        </p>
        <h3 className="mb-2">o mnie:</h3>
        <p className="mb-2 text-HRwhite ml-4 py-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae velit
          aliquam magnam, ut debitis recusandae hic praesentium ratione dicta
          dolorem doloremque perferendis beatae aspernatur. Ea et eos soluta
          quia repudiandae?
        </p>
        <RedBtn title="Brak zainteresowania" />
        <RedBtn title="Zatrudniony" />
      </div>
      <div>
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
          https://Loremipsum/dolor/sit/amet
        </div>
        <h2 className="text-HRwhite ml-4 py-3">Projekt w zespole Scrumowym</h2>
        <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRblue bg-HRblack px-3 py-4">
          https://Loremipsum/dolor/sit/amet
        </div>
        <h2 className="text-HRwhite ml-4 py-3">Projekt na zaliczenie</h2>
        <div className="flex flex-row h-25 font-['Catamaran'] text-xs space-x-1 text-left text-HRblue bg-HRblack px-3 py-4">
          https://Loremipsum/dolor/sit/amet
        </div>
      </div>
    </div>
  );
}
