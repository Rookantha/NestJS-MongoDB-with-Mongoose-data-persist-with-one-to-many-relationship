import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeStauts, EmployeeTier } from '../enum/Employee.enum';
import {v4 as uuid} from 'uuid'
import { EmployeeSearchDto } from '../dto/employee.search.dto';
import { EmployeeUpdateDto } from '../dto/employee.update.dto';
import { EmployeeCreateDto } from '../dto/employee.create.dto';
import { Employee } from '../schemas/Employee.schema';
import { EmployeeRepository } from '../repositories/Employee.repository';

@Injectable()
export class EmployeesService {
    constructor(private employeeRepository : EmployeeRepository){}

    getAllEmployees() : Promise<Employee[]>{
       return this.employeeRepository.findAll();
    }

    createEmployee(employeeCreateDto: EmployeeCreateDto) : Promise <Employee>{
        
        return this.employeeRepository.create(employeeCreateDto)
    }

/*     employeeSearch(employeeSearchDto: EmployeeSearchDto){
        //console.log(employeeSearchDto);
        
        const {status, name} = employeeSearchDto;
        let employee = this.getAllEmployees();

        if( status){
            employee = employee.filter( employee => employee.status === status)
            console.log(employee);
            
        }if( name){
            employee = employee.filter (employee => employee.firstName.includes(name)
             || employee.lastName.includes(name))
             console.log(employee);
             
        }
        return employee;
    }
    getEmployeeById(id: string) :Employee{
        const employees = this.getAllEmployees();
        let employee = employees.find(employee => employee.id === id)
        if(!employee){
            throw new NotFoundException(`${id} is not exist`)
        }
        return employee
    } */
/*     updateEmployee(employeeUpdateDto : EmployeeUpdateDto): Employee {
        
        const {id, city }= employeeUpdateDto;
        let employee = this.getEmployeeById(id)
        employee.nearCity = city        
        return employee;
    } */
/*     deleteEmployee(id: string):boolean {
        let employees = this.getAllEmployees();
        this.employees = employees.filter(employee => employee.id != id)
        return (employees.length != this.employees.length)
    } */

}
