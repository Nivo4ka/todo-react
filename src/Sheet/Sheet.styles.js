import styled, { css } from "styled-components";

export const StyledPToggle = styled.label`
  font-size: 22px;

  transform: rotate(90deg);
  margin-block-start: 0;
  margin-block-end: 0;
  width: fit-content;
  height: 0;
  position: relative;
  top: -35px;
  left: 25px;
  cursor: default;

  ${({ todos }) => {
    if (todos.length === 0) {
      return css`
        opacity: 0;
      `;
    } else {
      if (todos.filter((todo) => todo.isActive == true).length !== 0) {
        return css`
          opacity: 1;
          color: #e6e6e6;
        `;
      } else {
        return css`
          opacity: 1;
          color: #737373;
        `;
      }
    }
  }}
`;

export const StyledDiv = styled.div`
  min-width: 230px;
  max-width: 550px;
  width: 100%;
`;

export const StyledDivShadow = styled(StyledDiv)`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`;

export const StyledDivNewTodo = styled.div`
  min-width: 230px;
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    box-sizing: border-box;
    border: none;
    background: #fefefe;
    box-shadow: rgba(0, 0, 0, 0.03) 0 -2px 1px inset;
    padding: 16px 16px 16px 60px;
    min-width: 230px;
    max-width: 550px;
    width: 100%;
    border: none;
    outline: none;
    font-size: 24px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: inherit;
    line-height: 1.4em;
    color: #4d4d4d;
    ::placeholder {
      color: #e6e6e6;
      font-style: italic;
    }
  }
  :last-child {
    align-items: flex-start;
  }
`;
