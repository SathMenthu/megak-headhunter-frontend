import React, { useState } from 'react';
import { FindMenu } from '../components/HR/FindMenu';
import { Header } from '../components/HR/Header';
import { Line } from '../components/HR/Line';
import { MenuItem } from '../components/HR/MenuItem';
import { Pagination } from '../components/HR/Pagination';
import { StudentCV } from '../components/HR/StudentCV';

import { StudentList } from '../components/HR/StudentList';
import { StudentToTalkList } from '../components/HR/StudentsToTalkList';

export function HR() {
  const [menu, setMenu] = useState('studentList');
  const callback = (value: string) => {
    console.log(value);
    setMenu(value);
  };

  return (
    <div className="h-auto min-h-screen w-screen bg-HRblack-200 mx-0 px-0 box-content">
      <Header />
      <div className="container mx-auto flex flex-col my-3 px-3 bg-HRblack-100">
        <div className="flex flex-row h-6 my-6">
          {!(menu === 'showCV') && (
            <>
              <MenuItem
                title="Dostępni kursanci"
                value="studentList"
                isActive={menu === 'studentList'}
                onActive={callback}
              />
              <MenuItem
                title="Do rozmowy"
                value="toTalk"
                isActive={menu === 'toTalk'}
                onActive={callback}
              />
            </>
          )}
        </div>
        {!(menu === 'showCV') && (
          <>
            <Line />
            <FindMenu />
            <Line />
          </>
        )}
        {menu === 'studentList' ? <StudentList /> : null}
        {menu === 'toTalk' ? <StudentToTalkList showCV={callback} /> : null}
        {menu === 'showCV' ? <StudentCV /> : null}
      </div>
      {!(menu === 'showCV') && <Pagination />}
    </div>
  );
}
