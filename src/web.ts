import { WebPlugin } from '@capacitor/core';

import type { QuickWifiConnectPlugin } from './definitions';

export class QuickWifiConnectWeb
  extends WebPlugin
  implements QuickWifiConnectPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
