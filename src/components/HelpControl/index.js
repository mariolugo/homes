import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ControlStyled = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
`;

const HelpControl = () => {
  return (
    <ControlStyled>
      <Image src="/images/help_map.png" alt="Help Map" width={50} height={50} />
    </ControlStyled>
  );
};

export default HelpControl;
