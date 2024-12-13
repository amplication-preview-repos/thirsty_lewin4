import { SortOrder } from "../../util/SortOrder";

export type BicycleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  model?: SortOrder;
  serialNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
