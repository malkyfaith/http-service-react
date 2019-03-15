import styled from 'styled-components';
import { heading, body } from '@lendi-ui/typography';
import { mt, p } from '@lendi-ui/spacing';
import { Button } from '@lendi-ui/button';
import { grid, unit } from '@lendi-ui/grid';
import Container from '@lendi-ui/container';
// REMOVE WHEN GRID IS FIXED
export const Unit = styled.div`
  ${unit};
  /* border: 1px solid red; */
`;
export const Grid = styled.div`
  ${grid};
  /* border: 1px solid green; */
`;
export const Wrapper = styled.div`
  text-align: center;
`;

export const Action = styled(Button)`
  ${mt('xxs')}
`;

export const Heading = styled.div`
  ${heading({ size: 'lg', color: 'warn.500' })}
`;

export const PaddedUnit = styled(Unit)`
  ${p('xs')}
`;

export const AccountantDetailFormGroup = styled(Container)`
  ${p('xs')}
`;

export const Text = styled.div`
  ${body({ size: 'xs' })}
`;
