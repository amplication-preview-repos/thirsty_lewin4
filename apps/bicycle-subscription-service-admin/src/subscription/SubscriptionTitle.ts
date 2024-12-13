import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "customer";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.customer?.toString() || String(record.id);
};
