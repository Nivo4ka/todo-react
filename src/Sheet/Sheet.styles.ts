import styled, { css } from "styled-components";

export const StyledPToggle = styled.label<{
  isGetTodos: boolean;
  numberOfActiveTodos: boolean;
}>`
  font-size: ${({ theme }) => theme.palette.font.sizeToggle};

  transform: rotate(90deg);
  margin-block-start: 0;
  margin-block-end: 0;
  width: fit-content;
  height: 0;
  position: relative;
  top: -35px;
  left: 25px;
  cursor: default;

  ${({ isGetTodos, numberOfActiveTodos }) => {
    if (!isGetTodos) {
      return css`
        opacity: 0;
      `;
    } else {
      if (numberOfActiveTodos) {
        return css`
          opacity: 1;
          color: ${({ theme }) => theme.palette.lightTheme.placeholderText};
        `;
      } else {
        return css`
          opacity: 1;
          color: ${({ theme }) => theme.palette.lightTheme.activeToggleColor};
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

  form {
    min-width: 230px;
    max-width: 550px;
    width: 100%;
  }

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
    font-size: ${({ theme }) => theme.palette.font.sizeMain};
    font-family: ${({ theme }) => theme.palette.font.family};
    font-weight: inherit;
    line-height: 1.4em;
    color: ${({ theme }) => theme.palette.lightTheme.activeText};
    ::placeholder {
      color: ${({ theme }) => theme.palette.lightTheme.placeholderText};
      font-style: italic;
    }
  }
  :last-child {
    align-items: flex-start;
  }
`;
