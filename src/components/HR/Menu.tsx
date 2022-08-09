import React from 'react';
// eslint-disable-next-line import/no-cycle
import { HRMenuCallback } from '../../views/HR';
// eslint-disable-next-line import/no-cycle
import { MenuItem } from './MenuItem';

interface Props {
  callback: (value: HRMenuCallback) => void;
  menu: string;
}

export function Menu(props: Props) {
  const { callback, menu } = props;
  return (
    <div className="flex flex-row h-6 my-6">
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
    </div>
  );
}
