import React, { CSSProperties } from 'react';

export interface Props {
  color: CSSProperties['color'];
  text: string;
}

export const Button = ({ color = 'black', text = 'clicked!' }: Props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('Clicked!');
  };

  return (
    <button style={{ color }} onClick={onClick}>
      {text}
    </button>
  );
};
