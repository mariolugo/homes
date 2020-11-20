import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ControlStyled = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 50%;
  margin-right: 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  padding: 13px 9px;
  border-radius: 2px;
`;

/**
 * Help control that is required in the map.
 */
const HelpControl = () => {
  return (
    <ControlStyled>
      <Image src="/images/help_map.png" alt="Help Map" width={35} height={35} />
    </ControlStyled>
  );
};

export default HelpControl;
