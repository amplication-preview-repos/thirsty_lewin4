import * as graphql from "@nestjs/graphql";
import { BicycleResolverBase } from "./base/bicycle.resolver.base";
import { Bicycle } from "./base/Bicycle";
import { BicycleService } from "./bicycle.service";

@graphql.Resolver(() => Bicycle)
export class BicycleResolver extends BicycleResolverBase {
  constructor(protected readonly service: BicycleService) {
    super(service);
  }
}
