import { registerPlugin } from '@capacitor/core';

import type { QuickWifiConnectPlugin } from './definitions';

const QuickWifiConnect = registerPlugin<QuickWifiConnectPlugin>(
  'QuickWifiConnect',
  {
    web: () => import('./web').then(m => new m.QuickWifiConnectWeb()),
  },
);

export * from './definitions';
export { QuickWifiConnect };
