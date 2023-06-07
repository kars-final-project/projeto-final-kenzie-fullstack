import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"

enum FuelType {
    GASOLINA,
    ETANOL
}

export class CreateAdvertisementDto {
    @IsString()
    @IsNotEmpty()
    brand: string

    @IsString()
    @IsNotEmpty()
    model: string
    
    @IsNumber()
    @IsNotEmpty()
    year: number

    @IsEnum(FuelType)
    @IsNotEmpty()
    fuel: FuelType

    @IsNumber()
    @IsNotEmpty()
    mileage: number

    @IsString()
    @IsNotEmpty()
    color: string

    @IsNumber()
    @IsNotEmpty()
    fipe_list_price: number

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    cover_image: string

    @IsString()
    @IsNotEmpty()
    gallery_image_1: string

    @IsString()
    @IsNotEmpty()
    gallery_image_2: string
}
