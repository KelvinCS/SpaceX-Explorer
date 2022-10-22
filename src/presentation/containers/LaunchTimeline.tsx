import React, { useEffect, useMemo, useRef } from 'react'
import { gql, useQuery } from '@apollo/client';
import { Timeline } from '../components/Timeline';

const QUERY_GET_LAUNCHS = gql`
  query GetLauchpads {
    launches {
      launch_success
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

export const LaunchTimeline = () => {
  const {data, loading, error} = useQuery(QUERY_GET_LAUNCHS)

  useEffect(() => {
    console.log(data)
  }, [data])

  const launchTimelineItems = useMemo(() => {
    if (!data?.launches) return []

    return data.launches.map((launch: any) => ({
      x: new Date(launch.launch_date_utc),
      name: launch.rocket.rocket_name,
      label: launch.launch_site.site_name,
      description: launch.launch_success
    }))

  }, [data])

  return (
    <div>
      <Timeline items={launchTimelineItems}/>
    </div>
  );
}