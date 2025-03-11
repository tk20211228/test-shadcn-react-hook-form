import { networkConfigurationSchema, policyFormSchema } from "@/schema/policy";
import { z } from "zod";

export type PolicyForm = z.infer<typeof policyFormSchema>;

export type NetworkConfiguration = z.infer<typeof networkConfigurationSchema>;
