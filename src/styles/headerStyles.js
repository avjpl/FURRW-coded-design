import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeaderNav = styled(motion.div)`
  height: 0;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`;

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${({ theme: { text } }) => text}
  }

  span {
    height: 1rem;
    width: 1rem;
    background: ${({ theme: { red } }) => red};
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`;

export const Menu = styled.div`
  button {
    transform-origin: center;
    background: none;
    padding: 20px;
    outline: none;
    border: none;

    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${({ theme: { text } }) => text};
      margin: 8px;
    }
  }
`;
