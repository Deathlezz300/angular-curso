import { Country } from "./country"

export interface cacheStore{
    ByCapital:store,
    ByCountries:store,
    ByRegion:store
}

interface store{
    term:string,
    countries:Country[]
}