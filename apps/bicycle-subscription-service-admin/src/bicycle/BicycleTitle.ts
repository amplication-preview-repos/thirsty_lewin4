import { Bicycle as TBicycle } from "../api/bicycle/Bicycle";

export const BICYCLE_TITLE_FIELD = "model";

export const BicycleTitle = (record: TBicycle): string => {
  return record.model?.toString() || String(record.id);
};
