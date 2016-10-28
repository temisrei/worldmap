$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "eu",
            "value": 11
        },
        {
            "hc-key": "oc",
            "value": 4
        },
        {
            "hc-key": "af",
            "value": 2
        },
        {
            "hc-key": "as",
            "value": 57
        },
        {
            "hc-key": "na",
            "value": 24
        },
        {
            "hc-key": "sa",
            "value": 0
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title: {
            text: '簽約學校洲別分布'
        },
        subtitle: {
            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world-continents.js">World continents</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            mapData: Highcharts.maps['custom/world-continents'],
            joinBy: 'hc-key',
            name: '簽約學校小計',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.value}'
            },
        }]
    });
});
