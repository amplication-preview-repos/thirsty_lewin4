import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { SubscriptionUpdateManyWithoutBicyclesInput } from "./SubscriptionUpdateManyWithoutBicyclesInput";

export type BicycleUpdateInput = {
  location?: LocationWhereUniqueInput | null;
  model?: string | null;
  serialNumber?: string | null;
  status?: "Option1" | null;
  subscriptions?: SubscriptionUpdateManyWithoutBicyclesInput;
};
