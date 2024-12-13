import { Module } from "@nestjs/common";
import { SubscriptionPlanModuleBase } from "./base/subscriptionPlan.module.base";
import { SubscriptionPlanService } from "./subscriptionPlan.service";
import { SubscriptionPlanController } from "./subscriptionPlan.controller";
import { SubscriptionPlanResolver } from "./subscriptionPlan.resolver";

@Module({
  imports: [SubscriptionPlanModuleBase],
  controllers: [SubscriptionPlanController],
  providers: [SubscriptionPlanService, SubscriptionPlanResolver],
  exports: [SubscriptionPlanService],
})
export class SubscriptionPlanModule {}
