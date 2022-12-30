import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from 'mongoose';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './service/employees.service';
import { EmployeeRepository } from './repositories/Employee.repository';
import { Employee, EmployeeSchema } from './schemas/Employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Employee.name, schema : EmployeeSchema}])],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeRepository]
})
export class EmployeesModule {}
