import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  method?: "Option1" | null;
  paymentDate?: Date | null;
  status?: "Option1" | null;
  subscription?: SubscriptionWhereUniqueInput | null;
};
