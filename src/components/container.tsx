import * as React from 'react';

export interface IContainerProps {
  children: React.ReactNode;
}

export default function Container(props: IContainerProps) {
  return (
    <main className="relative bg-background h-auto w-full">
      {props.children}
    </main>
  );
}
