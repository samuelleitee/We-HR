import { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

export const Graphic = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,35,50,49]
      }],
      xaxis: {
        categories: [2020,2021,2022,2023,2024]
      }
    };

    if (chartRef && chartRef.current) {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
      
      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};