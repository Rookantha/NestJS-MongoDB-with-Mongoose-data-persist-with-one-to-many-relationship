import { IsNotEmpty } from "class-validator"
import { EmployeeStauts, EmployeeTier } from "../enum/Employee.enum"

export class EmployeeCreateDto{
    id: string
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    @IsNotEmpty()
    designation: string
    nearCity: string
    tier: EmployeeTier
    status : EmployeeStauts

}