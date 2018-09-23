$(function () {
  $('#container').highcharts({
    title: {
      text: '曲线图',
      x: -20 //center
    },
    colors: ['blue', 'red','green'],
    plotOptions: {
      line: {
        lineWidth: 3
      },
      tooltip: {
        hideDelay: 200
      }
    },
    xAxis: {
      categories: ['a', 'b', 'c','d']
    },
    yAxis: {
      title: {
        text: 'Y轴'
      },
      plotLines: [{
        value: 0,
        width: 1
      }]
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: '系列1',
      color: 'rgba(255,0,0,0.25)',
      lineWidth: 2,
      data: [12,0,23,23]
    }, {
      name: '系列2',
      color: 'rgba(0,120,200,0.75)',
      marker: {
        radius: 6
      },
      data: [3,21,31,31]
    }, {
      name: '系列3',
      color: 'rgba(0,255,120,0.75)',
      marker: {
        radius: 6
      },
      data: [1,3,9,9]
    }
		]
  });
});