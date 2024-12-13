import { Bicycle } from "../bicycle/Bicycle";
import { Payment } from "../payment/Payment";

export type Subscription = {
  bicycle?: Bicycle | null;
  createdAt: Date;
  customer: string | null;
  endDate: Date | null;
  id: string;
  payments?: Array<Payment>;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
