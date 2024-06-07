import { SortOrder } from "../../util/SortOrder";

export type SubscriptionPlanOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  durationMonths?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
