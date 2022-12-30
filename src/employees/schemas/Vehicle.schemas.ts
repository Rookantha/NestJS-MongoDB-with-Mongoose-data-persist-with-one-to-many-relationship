import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose"
import mongoose from "mongoose"
import { type } from "os"
import { Employee } from "./Employee.schema"

export type VehicleDocument = Vehicle & mongoose.Document

@Schema()
export class Vehicle{

    @Prop()
    id: string
    @Prop()
    make: string
    @Prop()
    model: string
    @Prop()
    vin: string
    @Prop({type : mongoose.Schema.Types.ObjectId, ref : 'Employee'})
    employeeId: Employee
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle)