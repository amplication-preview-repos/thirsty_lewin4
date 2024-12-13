import * as graphql from "@nestjs/graphql";
import { SubscriptionPlanResolverBase } from "./base/subscriptionPlan.resolver.base";
import { SubscriptionPlan } from "./base/SubscriptionPlan";
import { SubscriptionPlanService } from "./subscriptionPlan.service";

@graphql.Resolver(() => SubscriptionPlan)
export class SubscriptionPlanResolver extends SubscriptionPlanResolverBase {
  constructor(protected readonly service: SubscriptionPlanService) {
    super(service);
  }
}
