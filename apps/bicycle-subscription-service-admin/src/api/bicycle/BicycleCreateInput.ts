import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SubscriptionCreateNestedManyWithoutBicyclesInput } from "./SubscriptionCreateNestedManyWithoutBicyclesInput";

export type BicycleCreateInput = {
  location?: LocationWhereUniqueInput | null;
  model?: string | null;
  serialNumber?: string | null;
  status?: "Option1" | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutBicyclesInput;
};
