enum FuelType {
    GASOLINA,
    ETANOL
}

export class Advertisement {
    readonly id: number
    brand: string
    model: string
    year: number
    fuel: string
    mileage: number
    color: string
    fipe_list_price: number
    price: number
    description: string
    cover_image: string
    gallery_image_1: string
    gallery_image_2: string
    user_id: number
}
