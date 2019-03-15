import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { depth } from '@lendi-ui/depth';
import { m, px, py, p } from '@lendi-ui/spacing';
import { deriveSize } from '@lendi-ui/utils';

export const Wrapper = styled.div`
  text-align: center;
  ${p({ mobile: 'xxxs', tablet: 'lg' })} ${px({ mobile: 'sm', tablet: 'sm', desktop: 'nil' })};
  ${py({ mobile: 'md', tablet: 'md', desktop: 'lg' })};
`;

export const __Header = styled.header`
  display: flex;
  ${bg('shade.50')};
  width: 100%;
  height: ${deriveSize(4.25)};
  text-align: center;
`;

export const __SideMenu = styled.div`
  display: flex;
  ${bg('shade.50')};
  text-align: center;
  vertical-align: middle;
  min-height: 700px;
  ${m('xxs')};
`;

export const __TextWrapper = styled.p`
  margin: auto;
  text-align: center;
`;

export const __RouterWrapper = styled.div`
  ${bg('shade.0')};
  ${depth(1)};
  ${m('xxs')};
  box-sizing: border-box;
  ${p('xxs')};
`;
