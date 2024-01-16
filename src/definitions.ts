export interface QuickWifiConnectPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
