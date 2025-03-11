"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { policyFormSchema } from "@/schema/policy";
import { PolicyForm } from "@/types/policy";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";

export default function Header() {
  const form = useFormContext<PolicyForm>();
  const handleSave = async (formData: PolicyForm) => {
    console.log("handleSave", formData);
    toast(
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(formData, null, 2)}</code>
      </pre>
    );
    return;
  };

  return (
    <header className="flex items-center justify-between w-full p-4 h-20 ">
      <form
        onSubmit={form.handleSubmit(handleSave, (errors) => {
          console.log("errors", errors);
          const data = form.getValues();
          const parseResult = policyFormSchema.safeParse(data);
          if (!parseResult.success) {
            toast.error(
              <div className="space-y-1">
                <p>入力内容に問題があります</p>
                {parseResult.error.errors.map((error) => (
                  <p key={error.message}>{error.message}</p>
                ))}
              </div>
            );
          }
        })}
        className="h-12 px-4 flex flex-row items-center gap-2 w-full border rounded-lg bg-muted"
      >
        <span className="text-sm">ポリシー名：</span>
        <FormField
          control={form.control}
          name="policyDisplayName"
          render={({ field }) => (
            <FormItem className=" flex flex-row space-x-2 items-center w-[420px]">
              <FormControl>
                <Input
                  placeholder="ポリシー名"
                  {...field}
                  autoComplete="off"
                  className="h-8 w-[200px]"
                />
              </FormControl>
              <FormMessage className=" w-[220px] flex items-center mt-1" />
            </FormItem>
          )}
        />
        <span className="flex-1" />

        <Button className="h-8 w-20" type="submit" variant="outline">
          確認
        </Button>
      </form>
    </header>
  );
}
