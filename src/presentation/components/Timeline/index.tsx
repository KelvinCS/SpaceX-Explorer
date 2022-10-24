
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

export const Timeline = ({items}: TTimelineProps) => {

  const timelineOptions = useMemo(() => {
    return {
      ...timelineConfigOptions,
      series: [
        {
          dataLabels: {
            allowOverlap: false,
            backgroundColor: 'white',
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

  return <HighchartsReact highcharts={Highcharts} options={timelineOptions} />;

}