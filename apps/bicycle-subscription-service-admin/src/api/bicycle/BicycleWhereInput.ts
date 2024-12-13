import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type BicycleWhereInput = {
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  model?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
  status?: "Option1";
  subscriptions?: SubscriptionListRelationFilter;
};
