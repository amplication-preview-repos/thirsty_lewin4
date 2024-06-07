import { BicycleWhereUniqueInput } from "../bicycle/BicycleWhereUniqueInput";
import { PaymentUpdateManyWithoutSubscriptionsInput } from "./PaymentUpdateManyWithoutSubscriptionsInput";

export type SubscriptionUpdateInput = {
  bicycle?: BicycleWhereUniqueInput | null;
  customer?: string | null;
  endDate?: Date | null;
  payments?: PaymentUpdateManyWithoutSubscriptionsInput;
  startDate?: Date | null;
  status?: "Option1" | null;
};
