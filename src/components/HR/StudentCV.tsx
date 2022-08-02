import React from 'react';
// import { Link } from 'react-router-dom';
import { RedBtn } from './RedBtn';

interface Props {
  name?: string;
}

export function StudentCV({ name }: Props) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-52 p-3">
        <a href="/hr" className="relative left-[-5rem]">
          Wróć
        </a>
        <img
          className="h-24 w-24 rounded-full place-self-center mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="HR"
        />
        <h2 className="place-self-center">Jan Kowalski {name}</h2>
        <a href="https://github.com" className="place-self-center">
          github
        </a>
        <p className="place-self-center mb-2">+48 566 072 227</p>
        <p className="place-self-center mb-2">jankowalski@gmail.com</p>
        <h3 className="place-self-center mb-2">o mnie:</h3>
        <p className="mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae velit
          aliquam magnam, ut debitis recusandae hic praesentium ratione dicta
          dolorem doloremque perferendis beatae aspernatur. Ea et eos soluta
          quia repudiandae?
        </p>
        <RedBtn title="Brak zainteresowania" />
        <RedBtn title="Zatrudniony" />
      </div>
      <div>
        <h1>Oceny</h1>
        <h1>Oczekiwanie w stosunku do zatrudnienia</h1>
        <h1>Edukacja</h1>
        <h1>Kursy</h1>
        <h1>Doświadczenie zawodowe</h1>
        <h1>Portfolio</h1>
        <h1>Projekt w zespole Scrumowym</h1>
        <h1>Projekt na zaliczenie</h1>
      </div>
    </div>
  );
}
