import styled from 'styled-components';

import { Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8 } from '~/assets';
import { Breakpoints } from '~/constants';

export const StyledVector1 = styled(Vector1)`
  position: absolute;
  top: -80px;
  left: 0;
  width: 168px;

  @media (max-width: ${Breakpoints.TabletLarge}) {
    width: 110px;
  }

  @media (max-width: ${Breakpoints.Tablet}) {
    width: 80px;
    height: 650px;
    left: -20px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    top: -180px;
  }
`;

export const StyledVector2 = styled(Vector2)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 248px;

  @media (max-width: ${Breakpoints.TabletLarge}) {
    height: 160px;
    width: 160px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    height: 140px;
    width: 140px;
  }
`;

export const StyledVector3 = styled(Vector3)`
  position: absolute;
  top: 40px;
  right: 0;
  width: 120px;

  @media (max-width: ${Breakpoints.TabletLarge}) {
    width: 100px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    width: 60px;
    top: -20px;
  }
`;

export const StyledVector4 = styled(Vector4)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 520px;

  @media (max-width: ${Breakpoints.TabletLarge}) {
    height: 420px;
    width: 70px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    width: 40px;
  }
`;

export const StyledVector5 = styled(Vector5)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: 180px;

  @media (max-width: ${Breakpoints.TabletLarge}) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    width: 100px;
    height: 100px;
  }
`;

export const StyledVector6 = styled(Vector6)`
  position: absolute;
  bottom: 0;
  left: -20px;
  width: 280px;
  height: 300px;

  @media (max-width: ${Breakpoints.TabletLarge}) {
    width: 200px;
    height: 240px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    width: 160px;
    height: 160px;
  }
`;

export const StyledVector7 = styled(Vector7)`
  position: absolute;
  top: 40px;
  right: 0;
  width: 100px;

  @media (max-width: ${Breakpoints.TabletLarge}) {
    width: 80px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    width: 50px;
    top: -80px;
  }
`;

export const StyledVector8 = styled(Vector8)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 140px;

  @media (max-width: ${Breakpoints.TabletLarge}) {
    width: 80px;
    height: 120px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    width: 60px;
    height: 80px;
  }
`;
