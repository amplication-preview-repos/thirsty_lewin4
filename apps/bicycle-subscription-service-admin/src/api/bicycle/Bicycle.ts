import { Location } from "../location/Location";
import { Subscription } from "../subscription/Subscription";

export type Bicycle = {
  createdAt: Date;
  id: string;
  location?: Location | null;
  model: string | null;
  serialNumber: string | null;
  status?: "Option1" | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
