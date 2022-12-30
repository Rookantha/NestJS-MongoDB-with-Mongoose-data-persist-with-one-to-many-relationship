import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VehicleCreateDTO } from "../dto/vehicle.create.dto";
import { Vehicle } from "../schemas/Vehicle.schemas";

@Injectable()
export class VehicleRepository{
    constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>){}
    
        async create(VehicleCreateDTO: VehicleCreateDTO): Promise <Vehicle> {
            let newVehicle = new this.vehicleModel(VehicleCreateDTO);
            return await newVehicle.save()
        }
    
        async findAll() {
            return await this.vehicleModel.find().populate('employeeId');
        }

    
}