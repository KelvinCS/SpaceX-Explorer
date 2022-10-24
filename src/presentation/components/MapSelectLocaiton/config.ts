import proj4 from 'proj4';

export type TMapSelectLocationPoint = {
  z: number
  keyword: string
  id: string
  lat: number
  lon: number
  color: string
  tooltipDescription: string
}

export const getMapSelectLocationConfig = (
  mapData: any,
  bubbles: TMapSelectLocationPoint[],
  onClick?: (data: any) => void
) => ({
  chart: {
    proj4,
  },
  title: {
    text: "",
  },
  credits: {
    enabled: false,
  },
  mapNavigation: {
    enabled: true,
  },
  tooltip: {
    headerFormat: "",
    pointFormat:
      "<b>{point.freq}</b><br><b>{point.keyword}</b><br/>{point.tooltipDescription}",
  },
  series: [
    {
      // Use the gb-all map with no data as a basemap
      name: "Basemap",
      mapData: mapData,
      borderColor: "#A0A0A0",
      nullColor: "rgba(200, 200, 200, 0.3)",
      showInLegend: false,
    },
    {
      // Specify points using lat/lon
      type: "mapbubble",
      name: "Launchpads",
      color: "#5840ec",
      data: bubbles,
      cursor: "pointer",
      point: {
        events: {
          click: (event: any) => {
            if (onClick) onClick(event.point.options)
          },
        },
      },
    },
  ],
});
