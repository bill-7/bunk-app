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
}

export interface Crew {

}