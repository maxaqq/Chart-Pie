
$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Turno Noche Prueba de - ENTRADA'
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
                name: "11-13 Nota",
                y: 34.4
            }, {
                name: "4-7 Nota",
                y: 18.8,
                sliced: true,
                selected: true
            }, {
                name: "14-16 Nota",
                y: 25
            },{
                name: "8-10",
                y: 21.9
            }]
        }]
    });
});
