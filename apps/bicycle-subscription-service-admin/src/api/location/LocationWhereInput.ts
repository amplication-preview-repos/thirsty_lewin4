import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BicycleListRelationFilter } from "../bicycle/BicycleListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  address?: StringNullableFilter;
  bicycles?: BicycleListRelationFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  state?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
