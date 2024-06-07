import { BicycleWhereUniqueInput } from "../bicycle/BicycleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type SubscriptionWhereInput = {
  bicycle?: BicycleWhereUniqueInput;
  customer?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
