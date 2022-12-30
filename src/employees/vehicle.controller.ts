import { Body, Controller, Get, Post } from "@nestjs/common";
import { VehicleCreateDTO } from "./dto/vehicle.create.dto";
import { Vehicle } from "./schemas/Vehicle.schemas";
import { VehicleService } from "./service/vehicle.service";

@Controller('vehicles')
export class VehicleController{

    constructor(private vehicleService: VehicleService) { }

    @Post()
    async create(@Body() vehicleCreateDto: VehicleCreateDTO): Promise<Vehicle> {
        let ret = await this.vehicleService.create(vehicleCreateDto);
        console.log(ret)
        return ret
    }
    @Get()
    async getAll() {
        return this.vehicleService.getAll();
    }
}