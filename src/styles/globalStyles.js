import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${({ fluid }) => fluid && css`
    padding: 0;
    margin: 0;
    max-width: 100%;
  `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${({ spaceBetween }) => spaceBetween && css`
    justify-content: space-between;
  `}

  ${({ flexEnd }) => flexEnd && css`
    justify-content: flex-end;
  `}

  ${({ alignTop }) => alignTop && css`
    align-items: top;
  `}

  ${({ noHeight }) => noHeight && css`
    height: 0;
  `}
`;

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background: ${({ theme: { red } }) => red};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all .1s ease-in-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;

  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${({ theme: { red } }) => red};
  }

  &.pointer {
    border: 4px solid ${({ theme: { text } }) => text} !important;
  }
`;
