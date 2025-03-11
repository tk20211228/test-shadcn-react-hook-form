import { z } from "zod";

const wifiConfigSchema = z.object({
  SSID: z.string(),
  Security: z.enum(["None", "WEP-PSK", "WPA-PSK", "WPA2-PSK", "WPA3-PSK"]),
  Passphrase: z.string().optional(),
  AutoConnect: z.boolean().optional(),
  MACAddressRandomizationMode: z
    .enum(["Hardware", "Software", "None"])
    .optional(),
});
export const networkConfigurationSchema = z.object({
  GUID: z.string(),
  Name: z.string(),
  Type: z.literal("WiFi"),
  WiFi: wifiConfigSchema,
});
export const networkConfigurationsSchema = z.array(networkConfigurationSchema);
export const openNetworkConfigurationSchema = z
  .object({
    NetworkConfigurations: networkConfigurationsSchema,
  })
  .nullable()
  .optional();

export const policySchema = z.object({
  screenCaptureDisabled: z.boolean().default(false).optional(),
  mobileNetworksConfigDisabled: z.boolean().default(false).optional(),
  openNetworkConfiguration: openNetworkConfigurationSchema,
});

export const policyFormSchema = z.object({
  policyData: policySchema,
  policyDisplayName: z.string(),
  activeSSID: z.array(z.string()).default([]).optional(),
});
