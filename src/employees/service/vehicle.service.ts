import { Injectable } from "@nestjs/common";
import { VehicleCreateDTO } from "../dto/vehicle.create.dto";
import { VehicleRepository } from "../repositories/Vehicle.repository";
import { Vehicle } from "../schemas/Vehicle.schemas";

@Injectable()

export class VehicleService{
    constructor(private vehicalRepository : VehicleRepository){}

    async create(vehicleCreateDTO: VehicleCreateDTO): Promise<Vehicle> {
        return await this.vehicalRepository.create(vehicleCreateDTO)
    }
    async getAll(): Promise<Vehicle[]> {
        return await this.vehicalRepository.findAll();
    }
}