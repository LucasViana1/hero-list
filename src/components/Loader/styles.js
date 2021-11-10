import styled, { keyframes } from 'styled-components';
import { color } from '@styles/theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  margin-left: -0.5rem;
  margin-top: -0.5rem;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: ${color.gray.normal};
  animation: ${spin} 0.8s linear infinite;

  width: 8rem;
  height: 8rem;
`;
