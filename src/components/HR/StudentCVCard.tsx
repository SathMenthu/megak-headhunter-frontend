import React from 'react';
// eslint-disable-next-line import/no-cycle
import { HRMenuCallback } from '../../views/HR';
import { Envelope } from './Envelope';
import { Phone } from './Phone';
import {
  StudentToTalk,
  arrayOfStudentsToTalk,
} from './Placeholder_StudentsToTalk';
// eslint-disable-next-line import/no-cycle
import { RedBtn } from './RedBtn';

interface Props {
  firstName?: string;
  id: string | null;
  callback: (value: HRMenuCallback) => void;
}

export function StudentCVCard({ id, callback }: Props) {
  const student = arrayOfStudentsToTalk.find(
    (value) => value.id === id,
  ) as StudentToTalk;
  return (
    <div className="flex flex-col w-52 p-4 my-3 text-HRwhite bg-HRblack-400 place-self-start">
      <button
        type="button"
        onClick={() => callback({ setMenu: 'toTalk' })}
        className="relative left-[-8rem]"
      >
        Wróć
      </button>
      <img
        className="h-24 w-24 rounded-full mb-4 mx-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="HR"
      />
      <h2 className="text-HRwhite py-3 mx-auto">
        {student.firstName} {student.surname}
      </h2>

      <div className="flex flex-row mb-2 text-HRwhite font-light text-s items-center mx-auto">
        <img
          className="h-5 w-5 rounded-full"
          src="/images/GitHub-Mark-Light-64px.png"
          alt="github logo"
        />
        <a href="https://github.com" className="text-HRwhite text-HRblue ml-2">
          github
        </a>
      </div>

      <div className="flex flex-row mb-2 text-HRwhite font-light text-xs items-center">
        <Phone /> <span className="ml-2">+48 566 072 227</span>
      </div>
      <div className="flex flex-row mb-2 text-HRwhite font-light text-xs items-center">
        <Envelope />
        <span className="ml-2">jankowalski@gmail.com</span>
      </div>
      <h3 className="text-HRgrey-400">o mnie:</h3>
      <p className="mb-2 text-HRwhite py-3 text-xs font-extralight">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae velit
        aliquam magnam, ut debitis recusandae hic praesentium ratione dicta
        dolorem doloremque perferendis beatae aspernatur. Ea et eos soluta quia
        repudiandae?
      </p>
      <RedBtn title="Brak zainteresowania" />
      <RedBtn title="Zatrudniony" />
    </div>
  );
}
