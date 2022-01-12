export interface Launch {
  id: string
  name: string
  date_utc: string
  flight_number: number
  rocket: string
  crew: string[]
}

export interface Rocket {
  flickr_images: string[]
  name: string
  country: string
  stages: number
  height: {
    meters: number
  }
  mass: {
    kg: number
  }
}

export interface Crew {

}