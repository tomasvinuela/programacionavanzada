
import DATA from "./db/dataset.json"
import { Viaje, Vuelo } from "./types";

const api = {
    viajes: {
        list: async (origin: Vuelo["origin"]): Promise<Viaje[]> => {
            const [origins, destinations] = DATA.filter(
                (vuelo: Vuelo) => new Date(vuelo.date) > new Date(),
            ).reduce<[Vuelo[], Vuelo[]]>(
                ([origins, destinations], vuelo) => {
                    if (vuelo.origin == origin){
                        origins.push(vuelo);
                    }
                    else if (vuelo.destination == origin) {
                        destinations.push(vuelo);
                    }

                    return [origins, destinations];
                }, 
                [[], []],
            );
            
            const viajes: Viaje[] = []; 

            for(let origin of origins){
                for(let destination of destinations) {
                    const originDate = +new Date(origin.date)
                    const destinationDate = +new Date(destination.date)
                    
                    if (destinationDate > originDate) {
                        if ((origin.price + destination.price) < 800.00){
                            if(origin.availability >= 1 && destination.availability >= 1) {
                                const days = Math.ceil((destinationDate - originDate) / (1000*60*60*24));
                                viajes.push({
                                    id: crypto.randomUUID(),
                                    days,
                                    destination,
                                    origin,
                                    availability: Math.min(origin.availability, destination.availability),
                                    price: Math.ceil(origin.price + destination.price),
                                })
                            }
                        }
                    }
                }
            }

            return viajes;
        },
    },
    origin: {
        list: async (): Promise<Vuelo["origin"][]> => {
            const origins = new Set<Vuelo["origin"]>();
            for (let vuelo of DATA){
                origins.add(vuelo.origin)
            }

            return Array.from(origins);
        },
    },
};

export default api;