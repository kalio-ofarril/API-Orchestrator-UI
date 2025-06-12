'use client';

import { useEffect, useState } from 'react';
import { Theme } from '@carbon/react';
import { ReactNode } from 'react';

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marks that we're now safely in the client
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Avoid rendering Theme during SSR to prevent mismatch
    return null;
  }

  return <Theme theme="g10">{children}</Theme>;
};

export default ThemeWrapper;
