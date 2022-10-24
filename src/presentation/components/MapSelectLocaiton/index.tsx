
import React, { useMemo } from 'react'
import Highcharts from 'highcharts'
import highchartsMap from 'highcharts/modules/map'
import HighchartsReact from 'highcharts-react-official'
import mapDataUS from '@highcharts/map-collection/custom/world.geo.json'
import { wrapTransformToLatLon } from '../../../utils/helpers/wrapTransformToLatLon';
import { getMapSelectLocationConfig, TMapSelectLocationPoint } from './config';

if (typeof window !== "undefined") {
  highchartsMap(Highcharts)
  wrapTransformToLatLon(Highcharts)
}

export type TMapSelectLocationProps = {
  points: TMapSelectLocationPoint[];
  onSelect?: (point: TMapSelectLocationPoint) => void;
}

export const MapSelectLocation = ({ points = [], onSelect }: TMapSelectLocationProps) => {
  const bubbles = useMemo(
    () =>
      points.map((point) => ({
        ...point,
        lat: Number(point.lat.toFixed(6)),
        lon: Number(point.lon.toFixed(6)),
      })) || [],
    [points]
  );

  const options = useMemo(() => {
    return getMapSelectLocationConfig(
      mapDataUS,
      bubbles,
      onSelect
    )
  }, [bubbles, onSelect])

  return (
    <HighchartsReact
      constructorType={"mapChart"}
      highcharts={Highcharts}
      options={options}
    />
  );
}