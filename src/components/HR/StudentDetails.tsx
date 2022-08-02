import React from 'react';
import { RedBtn } from './RedBtn';

interface Props {
  name?: string;
}

export function StudentDetails({ name }: Props) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <img
          className="h-10 w-auto rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="HR"
        />
        {name && <h2>{name}</h2>}
        <a href="https://github.com">github</a>
        <p>+48 566 072 227</p>
        <p>email</p>
        <h3>o mnie:</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae velit
          aliquam magnam, ut debitis recusandae hic praesentium ratione dicta
          dolorem doloremque perferendis beatae aspernatur. Ea et eos soluta
          quia repudiandae?
        </p>
        <RedBtn title="Brak zainteresowania" />
        <RedBtn title="Zatrudniony" />
      </div>
    </div>
  );
}
