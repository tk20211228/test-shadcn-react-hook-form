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

export default function Page() {
  const form = useFormContext<PolicyForm>();

  return (
    <Card className="p-2">
      <FormField
        control={form.control}
        name="policyData.screenCaptureDisabled"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 gap-2">
            <div className="space-y-1 leading-none">
              <FormLabel className="text-base">
                スクリーンショットの無効化
              </FormLabel>
              <FormDescription>
                ADB接続による画面のミラーリングも無効化されます。
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
