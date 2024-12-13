import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BicycleServiceBase } from "./base/bicycle.service.base";

@Injectable()
export class BicycleService extends BicycleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
