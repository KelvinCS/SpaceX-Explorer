
export const timelineConfigOptions =   {
  chart: {
    zoomType: 'x',
    type: 'timeline'
  },
  xAxis: {
    type: 'datetime',
    visible: false
  },
  yAxis: {
    gridLineWidth: 1,
    title: null,
    labels: {
      enabled: false
    }
  },
  legend: {
    enabled: false
  },
  title: {
    text: 'Timeline of Space Exploration'
  },
  subtitle: {
    text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>'
  },
  tooltip: {
    style: {
      width: 300
    }
  },
  series: []
}
