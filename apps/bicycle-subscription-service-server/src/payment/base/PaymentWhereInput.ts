/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { EnumPaymentMethod } from "./EnumPaymentMethod";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnumPaymentStatus } from "./EnumPaymentStatus";
import { SubscriptionWhereUniqueInput } from "../../subscription/base/SubscriptionWhereUniqueInput";

@InputType()
class PaymentWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumPaymentMethod,
  })
  @IsEnum(EnumPaymentMethod)
  @IsOptional()
  @Field(() => EnumPaymentMethod, {
    nullable: true,
  })
  method?: "Option1";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  paymentDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPaymentStatus,
  })
  @IsEnum(EnumPaymentStatus)
  @IsOptional()
  @Field(() => EnumPaymentStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: () => SubscriptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SubscriptionWhereUniqueInput)
  @IsOptional()
  @Field(() => SubscriptionWhereUniqueInput, {
    nullable: true,
  })
  subscription?: SubscriptionWhereUniqueInput;
}

export { PaymentWhereInput as PaymentWhereInput };