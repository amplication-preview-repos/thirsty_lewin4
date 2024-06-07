import { BicycleWhereInput } from "./BicycleWhereInput";
import { BicycleOrderByInput } from "./BicycleOrderByInput";

export type BicycleFindManyArgs = {
  where?: BicycleWhereInput;
  orderBy?: Array<BicycleOrderByInput>;
  skip?: number;
  take?: number;
};
