/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Location } from "../../location/base/Location";
import { EnumBicycleStatus } from "./EnumBicycleStatus";
import { Subscription } from "../../subscription/base/Subscription";

@ObjectType()
class Bicycle {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Location,
  })
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  location?: Location | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  serialNumber!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumBicycleStatus,
  })
  @IsEnum(EnumBicycleStatus)
  @IsOptional()
  @Field(() => EnumBicycleStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => [Subscription],
  })
  @ValidateNested()
  @Type(() => Subscription)
  @IsOptional()
  subscriptions?: Array<Subscription>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Bicycle as Bicycle };
