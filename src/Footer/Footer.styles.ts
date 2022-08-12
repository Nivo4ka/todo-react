import styled, { css } from "styled-components";

export const StyledDivFooter = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.palette.lightTheme.infoText};
  padding: 10px 15px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.palette.lightTheme.borderColor};
  position: relative;
  background-color: ${({ theme }) => theme.palette.lightTheme.main};
  box-sizing: border-box;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  span {
    cursor: default;
  }
`;

export const StyledUlFooter = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  @media (max-width: 410px) {
    width: 100%;
    order: 1;
    padding: 10px 15px;
  }

  li {
    padding: 0 2px;
  }
`;

export const StyledFilter = styled.a<{ isSelected: boolean }>`
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;

  ${({ isSelected }) => {
    if (!isSelected) {
      return css`
        :hover {
          border-color: ${({ theme }) =>
            theme.palette.lightTheme.borderColorUlHover};
        }
      `;
    }

    return css`
      border-color: ${({ theme }) =>
        theme.palette.lightTheme.borderColorUlActive};
    `;
  }}
`;

export const StyledAFocus = styled.a`
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  border-color: rgba(175, 47, 47, 0.2);
`;

export const StyledButtonCompleted = styled.button<{ hasCompleted: boolean }>`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-weight: inherit;
  color: ${({ theme }) => theme.palette.lightTheme.infoText};
  appearance: none;
  float: right;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }

  ${({ hasCompleted }) => {
    if (hasCompleted) {
      return css`
        visibility: hidden;
      `;
    }
  }};
`;
