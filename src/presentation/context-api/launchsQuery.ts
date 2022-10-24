import { gql } from "@apollo/client"

export const QUERY_GET_LAUNCHS = gql`
query ($launchpad_id: String, $limit: Int!, $offset: Int!) {
  launches(limit: $limit, order: "DESC", offset: $offset sort: "launch_date_utc", find: {site_id:$launchpad_id}) {
    launch_success
    details
    launch_date_utc
    launch_site {
      site_name
    }
    rocket {
      rocket_name
    }
  }
}
`