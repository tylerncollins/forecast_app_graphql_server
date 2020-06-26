import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    forecast(lat: Float, lng: Float): Forecast
    resorts(name: String): [Resort!]
  }

  type Forecast {
    timezone: String!
    currently: DataPoint!
    daily: [DataPoint!]!
  }

  type Resort {
    name: String!
    lat: Float!
    lng: Float!
  }

  type DataPoint {
    date: String!
    time: String!
    summary: String!
    icon: String!
    temp: Float
    tempLow: Float
    tempHigh: Float
    precipPrblty: Float
    precipType: String
  }
`
