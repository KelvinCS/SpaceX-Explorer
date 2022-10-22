import React, { useEffect, useMemo } from 'react'
import Highcharts from 'highcharts'
import highchartsMap from 'highcharts/modules/map'
import HighchartsReact from 'highcharts-react-official'
import proj4 from 'proj4';
import mapDataUS from '@highcharts/map-collection/custom/world.geo.json'
import { gql, useQuery } from '@apollo/client';
import { customWrap } from './customWrap';


if (typeof window !== "undefined") {
  // window.proj4 = window.proj4 || proj4
  highchartsMap(Highcharts)
  customWrap(Highcharts)
}

export type TMapSelectLocationProps = {}

const QUERY_GET_LAUNCHPADS = gql`
  query GetLauchpads {
    launchpads {
      details
      name
      location {
        latitude
        longitude
        name
        region
      }
    }
  }
`

export const MapSelectLocation = () => {
  const { loading, error, data } = useQuery(QUERY_GET_LAUNCHPADS)

  useEffect(() => {
    console.log(loading, error, data)
  }, [loading, error, data])

  const launchpads = useMemo(() => {
    if (error || loading) return []
    console.log(data)

    return data?.launchpads?.map(({ location, name }: any) => ({
      z: 10,
      keyword: name,
      lat: Number(location.latitude.toFixed(6)),
      lon: Number(location.longitude.toFixed(6)),
      color: '#000'
    })) || []

  }, [error, loading, data])


  const options = useMemo(() => {
    

    return {
      chart: {
        map: 'countries/us/us-all',
        proj4
      },
      title: {
        text: 'Map Demo'
      },
      credits: {
        enabled: false
      },
      mapNavigation: {
        enabled: true
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<b>{point.freq}</b><br><b>{point.keyword}</b>                      <br>lat: {point.lat}, lon: {point.lon}'
      },
      series: [{
        // Use the gb-all map with no data as a basemap
        name: 'Basemap',
        mapData: mapDataUS,
        borderColor: '#A0A0A0',
        nullColor: 'rgba(200, 200, 200, 0.3)',
        showInLegend: false
      }, {
        // Specify points using lat/lon
        type: 'mapbubble',
        name: 'Cities',
        color: '#4169E1',
        data: launchpads,
        cursor: 'pointer',
        point: {
          events: {
            click: function () {
              console.log("Opaa");
            }
          }
        }
      }]
    }
  }, [launchpads])

  return (
    <div>

      <HighchartsReact 
        constructorType={'mapChart'}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}