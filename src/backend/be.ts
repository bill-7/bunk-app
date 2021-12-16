const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()
const port = 8081
const corsOptions = { origin: "http://localhost:4200" }

app.use(cors(corsOptions))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

const launchURL = `https://api.spacexdata.com/v4/launches/upcoming`
const crewURL = `https://api.spacexdata.com/v4/crew/{{id}}`
const rocketURL = `https://api.spacexdata.com/v4/rockets/{{id}}`

app.get("/launches", (_: any, res: { json: (payload: JSON[]) => void }) => {
  axios(launchURL).then((sr: SpacexResponse) => {
    res.json(sr.data)
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`)
})

interface SpacexResponse {
  data: JSON[]
}