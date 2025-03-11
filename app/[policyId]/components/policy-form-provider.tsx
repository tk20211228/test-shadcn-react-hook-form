"use client";

import { Form } from "@/components/ui/form";
import { policyFormSchema } from "@/schema/policy";
import { PolicyForm } from "@/types/policy";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";

export function PolicyFormProvider({ children }: { children: ReactNode }) {
  const form = useForm<PolicyForm>({
    mode: "onChange",
    resolver: zodResolver(policyFormSchema),
    defaultValues: {
      policyData: {
        screenCaptureDisabled: false,
        mobileNetworksConfigDisabled: false,
      },
      policyDisplayName: "",
      activeSSID: ["1"],
    },
  });

  return <Form {...form}>{children}</Form>;
}
