import { gql } from "@apollo/client";

export const QUERY_GET_LAUNCHPADS = gql`
  {
    launchpads {
      id
      name
      status
      details
      successful_launches
      attempted_launches
      location {
        latitude
        longitude
        name
        region
      }
    }
  }
`;
