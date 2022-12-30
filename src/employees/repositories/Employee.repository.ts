import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { async } from "rxjs";
import { EmployeeCreateDto } from "../dto/employee.create.dto";
import { Employee, EmployeeDocument } from "../schemas/Employee.schema";

@Injectable()
export class EmployeeRepository{
    constructor (@InjectModel(Employee.name) private employeModel: Model<EmployeeDocument>){}

        async create(createEmployeeDTO : EmployeeCreateDto) : Promise<Employee>{
            let newEmployee = new this.employeModel(createEmployeeDTO);
            return await  newEmployee.save()

        }

        async findAll():Promise<Employee[]>{
            return await this.employeModel.find()
        }

    
    
}