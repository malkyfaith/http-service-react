import styled from 'styled-components';
import Card from '@lendi-ui/card';
import { mt } from '@lendi-ui/spacing';

export const StyledCard = styled(Card)`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  ${mt('md')};
`;

export const AlertWrapper = styled.div`
  ${mt('xxs')}
`;
