import styled from 'styled-components';
import { pl, pr, mb } from '@lendi-ui/spacing';
import { grid, unit } from '@lendi-ui/grid';

// REMOVE WHEN GRID IS FIXED
const Unit = styled.div`
  ${unit};
`;
export const Grid = styled.div`
  ${grid};
`;
//

export const LeftPaddedUnit = styled(Unit)`
  ${pl('xxs')};
  ${pr('xs')};
  ${mb('sm')}
`;

export const RightPaddedUnit = styled(Unit)`
  ${pl('xs')};
  ${pr('xxs')};
  ${mb('sm')}
`;
