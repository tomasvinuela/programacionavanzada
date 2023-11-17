export type Vuelo = {
    date: string
    origin: string
    destination: string
    price: number
    availability: number
}

export type Viaje = {
    id: string
    origin: Vuelo
    destination: Vuelo
    price: number
    availability: number
    days: number
}