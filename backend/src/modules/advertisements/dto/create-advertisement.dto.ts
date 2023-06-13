import { IsEnum, IsNotEmpty, IsString } from "class-validator"

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
    
    @IsString()
    @IsNotEmpty()
    year: string

    // @IsEnum(FuelType)
    @IsString()
    @IsNotEmpty()
    fuel: string

    @IsString()
    @IsNotEmpty()
    mileage: string

    @IsString()
    @IsNotEmpty()
    color: string

    @IsString()
    @IsNotEmpty()
    fipe_list_price: string

    @IsString()
    @IsNotEmpty()
    price: string

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
