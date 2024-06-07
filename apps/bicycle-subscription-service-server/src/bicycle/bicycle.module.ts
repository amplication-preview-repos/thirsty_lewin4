import { Module } from "@nestjs/common";
import { BicycleModuleBase } from "./base/bicycle.module.base";
import { BicycleService } from "./bicycle.service";
import { BicycleController } from "./bicycle.controller";
import { BicycleResolver } from "./bicycle.resolver";

@Module({
  imports: [BicycleModuleBase],
  controllers: [BicycleController],
  providers: [BicycleService, BicycleResolver],
  exports: [BicycleService],
})
export class BicycleModule {}
