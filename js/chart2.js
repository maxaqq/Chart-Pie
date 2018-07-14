$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Turno Noche Prueba de - SALIDA'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'

                    }
                }
            }
        },
        series: [{
            name: "Porcentaje",
            colorByPoint: true,
            data: [{
                name: "13-16 Nota",
                y: 60.9
            }, {
                name: "3-10 Nota",
                y: 4.3,
                sliced: true,
                selected: true
            }, {
                name: "17-19 Nota",
                y: 26.1
            },{
                name: "11-13",
                y: 8.7
            }]
        }]
    });
});
