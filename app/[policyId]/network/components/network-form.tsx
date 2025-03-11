"use client";

import { Card } from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { PolicyForm } from "@/types/policy";
import { useFormContext } from "react-hook-form";

export default function NetworkForm() {
  const form = useFormContext<PolicyForm>();
  return (
    <Card className="p-2">
      <FormField
        control={form.control}
        name="policyData.mobileNetworksConfigDisabled"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 gap-2 h-fit">
            <div className="space-y-1 leading-none">
              <FormLabel className="text-base">
                モバイルネットワーク設定の無効化
              </FormLabel>
              <FormDescription>
                モバイルネットワーク設定変更のみを禁止します。
                <br />
                自動でモバイルネットワークはオフになりません。
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                className=""
              />
            </FormControl>
          </FormItem>
        )}
      />
    </Card>
  );
}
