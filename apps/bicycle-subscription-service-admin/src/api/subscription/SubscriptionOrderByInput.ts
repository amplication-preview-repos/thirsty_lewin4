import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  bicycleId?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
