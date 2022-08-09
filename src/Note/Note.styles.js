import styled from "styled-components";

export const StyledPToggle = styled.label`
  font-size: 22px;
  color: #737373;
  transform: rotate(90deg);
  margin-block-start: 0;
  margin-block-end: 0;
  width: fit-content;
  height: 0;
  position: relative;
  top: -35px;
  left: 25px;
  cursor: pointer;
`;

export const StyledPanel = styled.div`
  min-width: 230px;
  max-width: 550px;
  width: 100%;
`;

export const StyledNote = styled(StyledPanel)`
  background: #fefefe;
  height: 30px;
  color: #4d4d4d;
  font: 24px "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
