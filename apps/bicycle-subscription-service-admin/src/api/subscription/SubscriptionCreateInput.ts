import { BicycleWhereUniqueInput } from "../bicycle/BicycleWhereUniqueInput";
import { PaymentCreateNestedManyWithoutSubscriptionsInput } from "./PaymentCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  bicycle?: BicycleWhereUniqueInput | null;
  customer?: string | null;
  endDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutSubscriptionsInput;
  startDate?: Date | null;
  status?: "Option1" | null;
};
