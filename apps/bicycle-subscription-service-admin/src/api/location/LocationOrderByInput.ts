import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
