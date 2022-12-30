import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeesService } from './service/employees.service';
import { EmployeeSearchDto } from './dto/employee.search.dto';
import { EmployeeUpdateDto } from './dto/employee.update.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { EmployeeCreateDto } from './dto/employee.create.dto';
import { EmployeeTierValidationPipe } from './employee-tier-validation/employee-tier-validation.pipe';
import { Employee } from './schemas/Employee.schema';

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService : EmployeesService){}

    @Get()
    async getAllEmployees(@Query() param : EmployeeSearchDto) : Promise<Employee[]>{
        return await this.employeeService.getAllEmployees();

/*         if(Object.keys(param).length){
            console.log(param);
            return this.employeeService.employeeSearch(param)

        }else{
            return this.employeeService.getAllEmployees();
        } */
        
    }
    
    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new EmployeeTierValidationPipe)
    createEmployee(@Body() employeeCreateDto: EmployeeCreateDto) : Promise<Employee>{
        return this.employeeService.createEmployee(employeeCreateDto)

    }
     
/*     @Get('/:id')
    getEmployeeById(@Param('id') id: string){
        return this.employeeService.getEmployeeById(id)
    } */

/*     @Put('/:id/city')
    updateEmployee(@Param ('id') id: string, @Body() employeeUpdateDto : EmployeeUpdateDto ){
        employeeUpdateDto.id = id
        return this.employeeService.updateEmployee(employeeUpdateDto)

    } */
/*     @Delete('/:id')
    @HttpCode(204)
    deleteEmployee(@Param('id') id: string) {
        if(!this.employeeService.deleteEmployee(id)){
            throw new NotFoundException('Employee does not exist')
        }
                   
    } */
}
