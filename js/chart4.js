
$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Turno Mañana Prueba de - SALIDA'
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
                name: "9-12 Nota",
                y: 36.7
            }, {
                name: "4-8 Nota",
                y: 30,
                sliced: true,
                selected: true
            }, {
                name: "13-16 Nota",
                y: 33.3
            },]
        }]
    });
});
