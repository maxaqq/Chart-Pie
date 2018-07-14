
$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Turno Mañana Prueba de - ENTRADA'
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
                name: "15-18 Nota",
                y: 26.5,
                sliced: true,
                selected: true
            }, {
                name: "4-10 Nota ",
                y:20.6 
            },{
                name: "11-14",
                y: 52.9
            }]
        }]
    });
});
