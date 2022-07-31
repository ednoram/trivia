import { useEffect, useLayoutEffect } from 'react';
import { IsBrowser } from 'src/constants';

const useIsomorphicLayoutEffect = IsBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
