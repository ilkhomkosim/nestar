import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { ObjectId } from "mongoose";
import { PropertyLocation, PropertySize, PropertyStatus, PropertyType, PropertyVolume } from "../../enums/property.enum";

@InputType()
export class PropertyUpdate{
    @IsNotEmpty()
    @Field(() => String)
    _id: ObjectId;

    @IsOptional()
    @Field(() => PropertyType, {nullable: true})
    propertyType?: PropertyType;

    @IsOptional()
    @Field(() => PropertyStatus, {nullable:true})
    propertyStatus?: PropertyStatus;

    @IsOptional()
    @Field(() => PropertyLocation, {nullable: true})
    propertyLocation?: PropertyLocation;

    @IsOptional()
    @Field(() => PropertySize, {nullable: true})
    propertySize?: PropertySize;

    @IsOptional()
    @Field(() => PropertyVolume, {nullable: true})
    propertyVolume?: PropertyVolume;

    @IsOptional()
    @Length(3, 100)
    @Field(() => String, {nullable: true})
    propertyTitle?: string;

    @IsOptional()
    @Field(() => Number, {nullable: true})
    propertyPrice?: number;

    @IsOptional()
    @Field(() => [String], {nullable: true})
    propertyImages?: string[];

    @IsOptional()
    @Length(5, 500)
    @Field(() => String, {nullable: true})
    propertyDesc?: string;

    soldAt?: Date;

    deletedAt?: Date;
}