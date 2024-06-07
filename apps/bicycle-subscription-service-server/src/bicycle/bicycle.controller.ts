import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BicycleService } from "./bicycle.service";
import { BicycleControllerBase } from "./base/bicycle.controller.base";

@swagger.ApiTags("bicycles")
@common.Controller("bicycles")
export class BicycleController extends BicycleControllerBase {
  constructor(protected readonly service: BicycleService) {
    super(service);
  }
}
