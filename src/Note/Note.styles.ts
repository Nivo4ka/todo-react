import styled, { css } from "styled-components";

export const StyledPanel = styled.div`
  min-width: 230px;
  max-width: 550px;
  width: 100%;
`;

export const StyledLabelCheck = styled.label<{ checked: boolean }>`
  width: 50px;
  height: 35px;
  word-break: break-all;
  display: block;
  line-height: 1.2;
  background-repeat: no-repeat;
  background-position: center left;
  background-image: ${({ checked }) =>
    checked
      ? "url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)"
      : "url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E)"};
  display: inline-flex;
  align-items: center;
  user-select: none;
`;

export const StyledLabelNote = styled.label<{ checked: boolean }>`
  width: 100%;
  word-break: break-all;
  padding: 15px 15px 15px 20px;
  display: block;
  line-height: 1.2;
  display: inline-flex;
  align-items: center;
  user-select: none;
  ${({ checked }) => {
    if (checked) {
      return css`
        text-decoration: line-through;
        color: #d9d9d9;
      `;
    }
  }};
`;

export const StyledNote = styled(StyledPanel)`
  background: ${({ theme }) => theme.palette.lightTheme.main};
  color: ${({ theme }) => theme.palette.lightTheme.activeText};
  font-size: ${({ theme }) => theme.palette.font.sizeMain};
  font-family: ${({ theme }) => theme.palette.font.family};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid
    ${({ theme }) => theme.palette.lightTheme.borderBottom};
  position: relative;
  :first-child {
    border-top: 1px solid ${({ theme }) => theme.palette.lightTheme.borderColor};
  }
  :last-child {
    border-bottom: 0;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 40px;
  height: 35px;
  margin: auto 0;
  border: none;
  appearance: none;
  position: absolute;
  opacity: 0;
`;

export const StyledButtonDestroy = styled.button`
  background: none;
  width: 40px;
  height: 35px;
  margin: auto;
  border: none;
  position: absolute;
  right: 10px;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: ${({ theme }) => theme.palette.font.sizeButton};
  color: ${({ theme }) => theme.palette.lightTheme.buttonColorDestroy};
  cursor: pointer;
  opacity: 0;
  ${StyledNote}:hover & {
    opacity: 1;
  }
  transition: color 0.2s ease-out;
`;

export const StyledTitleTodo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const StyledInputNote = styled.input.attrs({ type: "text" })`
  outline: 0;
  position: relative;
  margin: 0 0 0 42px;
  width: 100%;
  font-size: ${({ theme }) => theme.palette.font.sizeMain};
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: ${({ theme }) => theme.palette.lightTheme.activeText};
  padding: 12px 16px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
  box-sizing: border-box;
`;
