import { BicycleUpdateManyWithoutLocationsInput } from "./BicycleUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  address?: string | null;
  bicycles?: BicycleUpdateManyWithoutLocationsInput;
  city?: string | null;
  name?: string | null;
  state?: string | null;
  zipCode?: string | null;
};
