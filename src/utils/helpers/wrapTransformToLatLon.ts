import Highcharts from 'highcharts';

export const wrapTransformToLatLon = (highcharts: typeof Highcharts) => {
  highcharts.wrap(
    highcharts.Chart.prototype,
    "transformToLatLon",
    function(this: any, proceed, point) {
      if (!isNaN(point.x) && !isNaN(point.y)) {
        return proceed.apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  );
}
