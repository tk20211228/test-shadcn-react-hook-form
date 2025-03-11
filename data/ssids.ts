import { NetworkConfiguration } from "@/types/policy";

export const ssids: NetworkConfiguration[] = [
  {
    GUID: "1",
    Name: "SSID1",
    Type: "WiFi",
    WiFi: {
      SSID: "SSID1",
      Security: "WEP-PSK",
      Passphrase: "1234567890",
      AutoConnect: true,
    },
  },
  {
    GUID: "2",
    Name: "SSID2",
    Type: "WiFi",
    WiFi: {
      SSID: "SSID2",
      Security: "WPA2-PSK",
      Passphrase: "1234567890",
      AutoConnect: true,
    },
  },
  {
    GUID: "3",
    Name: "SSID3",
    Type: "WiFi",
    WiFi: {
      SSID: "SSID3",
      Security: "None",
      AutoConnect: false,
    },
  },
  {
    GUID: "4",
    Name: "SSID4",
    Type: "WiFi",
    WiFi: {
      SSID: "SSID4",
      Security: "WPA3-PSK",
      Passphrase: "1234567890",
      AutoConnect: true,
      MACAddressRandomizationMode: "Hardware",
    },
  },
];
