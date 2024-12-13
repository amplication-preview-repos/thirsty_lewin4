import { BicycleCreateNestedManyWithoutLocationsInput } from "./BicycleCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  address?: string | null;
  bicycles?: BicycleCreateNestedManyWithoutLocationsInput;
  city?: string | null;
  name?: string | null;
  state?: string | null;
  zipCode?: string | null;
};
