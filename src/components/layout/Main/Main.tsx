import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main className="flex justify-center items-center flex-grow">
      {children}
    </main>
  );
}
