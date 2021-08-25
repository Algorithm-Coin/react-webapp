import React from 'react';
import { css } from '@emotion/react';

const ButtonStyle = css`
  font-size: 17px;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  text-align: center;
  background-color: transparent;
  border: 3px solid white;
  padding: 15px 15px;
  text-transform: uppercase;
  display: inline-block;

  &:hover {
    border: 3px solid #FDD700;
    color: #FDD700;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <a
      css={ButtonStyle}
      href={props.href}
    >
      {props.text}
    </a>
  );
};

export default Button;