import React, { useState } from 'react';
import { FindMenu } from '../components/HR/FindMenu';
import { Header } from '../components/HR/Header';
import { Line } from '../components/HR/Line';
// eslint-disable-next-line import/no-cycle
import { Menu } from '../components/HR/Menu';
import { Pagination } from '../components/HR/Pagination';
// eslint-disable-next-line import/no-cycle
import { StudentCV } from '../components/HR/StudentCV';
// eslint-disable-next-line import/no-cycle
import { StudentList } from '../components/HR/StudentList';
// eslint-disable-next-line import/no-cycle
import { StudentToTalkList } from '../components/HR/StudentsToTalkList';

export type StateOfMenu = 'studentList' | 'toTalk' | 'showCV';

export interface HRMenuCallback {
  setMenu: StateOfMenu;
  id?: string;
}

export function HR() {
  const [menu, setMenu] = useState<StateOfMenu>('studentList');
  const [userCV, setUserCV] = useState<string | null>(null);
  const callback = (value: HRMenuCallback) => {
    setMenu(value.setMenu);
    if (value.id) {
      setUserCV(value.id);
    }
  };

  return (
    <div className="h-auto min-h-screen w-screen bg-HRblack-100 mx-0 px-0 box-content">
      <Header />
      <div className="container mx-auto flex flex-col my-3 px-3 bg-HRblack-400">
        {!(menu === 'showCV') && (
          <>
            <Menu callback={callback} menu={menu} />
            <Line />
            <FindMenu />
            <Line />
          </>
        )}
        {menu === 'studentList' && <StudentList />}
        {menu === 'toTalk' && <StudentToTalkList showCV={callback} />}
        {menu === 'showCV' && <StudentCV id={userCV} />}
      </div>
      {!(menu === 'showCV') && <Pagination />}
    </div>
  );
}
