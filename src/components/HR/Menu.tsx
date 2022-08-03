import React from 'react';
import { MenuItem } from './MenuItem';

interface Props {
  callback: (value: string) => void;
  menu: string;
}

export function Menu(props: Props) {
  const { callback, menu } = props;
  return (
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
  );
}
