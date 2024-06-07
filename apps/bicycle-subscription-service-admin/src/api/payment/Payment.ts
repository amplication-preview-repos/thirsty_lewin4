import { Subscription } from "../subscription/Subscription";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  method?: "Option1" | null;
  paymentDate: Date | null;
  status?: "Option1" | null;
  subscription?: Subscription | null;
  updatedAt: Date;
};
