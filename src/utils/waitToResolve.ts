import { act } from '@testing-library/react';

export const waitToResolve = async (): Promise<void> =>
  await act(async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 50);
    });
  });
