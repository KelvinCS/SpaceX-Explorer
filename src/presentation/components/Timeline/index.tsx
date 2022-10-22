
import React, { useEffect, useMemo, useRef } from 'react'
import Highcharts from 'highcharts'
import highchartsTimeline from 'highcharts/modules/timeline'
import HighchartsReact from 'highcharts-react-official'
import { timelineConfigOptions } from './config';

if (typeof window !== "undefined") {
  highchartsTimeline(Highcharts)
}

export type TTimelineItem = {
  x: Date
  name: string
  label: string
  description: string
}

export type TTimelineProps = {
  items: TTimelineItem[]
}

const series = [
  {
    dataLabels: {
      allowOverlap: false,
      format:
        '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
        "{point.x:%d %b %Y}</span><br/>{point.label}",
    },
    marker: {
      symbol: "circle",
    },
    data: [],
  },
];

export const Timeline = ({items}: TTimelineProps) => {

  const timelineOptions = useMemo(() => {
    return {
      ...timelineConfigOptions,
      series: [
        {
          dataLabels: {
            allowOverlap: false,
            format:
              '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
              "{point.x:%d %b %Y}</span><br/>{point.label}",
          },
          marker: {
            symbol: "circle",
          },
          data: items.map((item) => ({
            ...item,
            x: item.x.getTime()
          })),
        },
      ],
    };
  }, [items])

  useEffect(() => {
    console.log(timelineOptions)
  }, [timelineOptions])

  return (
    <div>
      <HighchartsReact 
        highcharts={Highcharts} 
        options={timelineOptions} 
      />
    </div>
  );

}