import { IsNotEmpty, IsString } from "class-validator"

export class CreateAdressDto {
    @IsString()
    @IsNotEmpty()
    zip_code: string

    @IsString()
    @IsNotEmpty()
    state: string

    @IsString()
    @IsNotEmpty()
    city: string

    @IsString()
    @IsNotEmpty()
    street: string

    @IsString()
    @IsNotEmpty()
    number: string

    @IsString()
    @IsNotEmpty()
    complement: string

}
