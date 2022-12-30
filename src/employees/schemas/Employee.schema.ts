import { Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";
import { EmployeeStauts, EmployeeTier } from "../enum/Employee.enum";

/* export const EmployeeSchema=({
    id: String,
    firstName: String,
    lastName: String,
    designation: String,
    nearestCity: String,
    tier: EmployeeTier,
    status: EmployeeStatus
}) */

// nestJS way to wrapper to MongoDB
export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee{

    // automatically create prperties for type this internally convert to nestJS style
    @Prop()
    id: string
    @Prop({ required: true })
    firstName: string
    @Prop({ required: true })
    lastName: string
    @Prop()
    designation: string
    @Prop()
    nearestCity: string
    @Prop()
    tier: EmployeeTier
    @Prop()
    status: EmployeeStauts

}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)