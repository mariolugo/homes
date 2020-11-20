import React, { useState } from 'react';
import styled from 'styled-components';

const ControlStyled = styled.div`
  height: 35px;
  box-sizing: border-box;
  width: 290px;
  border-radius: 2px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  margin-bottom: 15px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -148px;
  padding: 8px;
  span {
    font-size: 14px;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid black;
  background: ${(props) => (props.checked ? 'rgb(141, 122, 255)' : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  margin-right: 10px;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgb(141, 122, 255);
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

/**
 * Component used for the map, in here we have a checkbox and we can add logic to handle the checkbox.
 * For example we can activate the checkbox and filter the homes if the map changes
 */
const DraggableControl = () => {
  const [active, setActive] = useState(false);

  const onCheckboxChange = () => {
    setActive((prev) => !prev);
  };

  return (
    <ControlStyled>
      <div>
        <form>
          <label htmlFor="checkbox">
            <CheckboxContainer>
              <HiddenCheckbox id="checkbox" checked={active} onChange={onCheckboxChange} />
              <StyledCheckbox checked={active}>
                <Icon viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </Icon>
              </StyledCheckbox>
            </CheckboxContainer>
            <span>Filtrar mientras te mueves en el mapa</span>
          </label>
        </form>
      </div>
    </ControlStyled>
  );
};

export default DraggableControl;
