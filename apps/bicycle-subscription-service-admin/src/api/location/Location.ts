import { Bicycle } from "../bicycle/Bicycle";

export type Location = {
  address: string | null;
  bicycles?: Array<Bicycle>;
  city: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  state: string | null;
  updatedAt: Date;
  zipCode: string | null;
};
