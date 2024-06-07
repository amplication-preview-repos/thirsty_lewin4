import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubscriptionPlanService } from "./subscriptionPlan.service";
import { SubscriptionPlanControllerBase } from "./base/subscriptionPlan.controller.base";

@swagger.ApiTags("subscriptionPlans")
@common.Controller("subscriptionPlans")
export class SubscriptionPlanController extends SubscriptionPlanControllerBase {
  constructor(protected readonly service: SubscriptionPlanService) {
    super(service);
  }
}
