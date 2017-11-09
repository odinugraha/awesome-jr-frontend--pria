<script>
        var now = moment().endOf('day').toDate();
        var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();
        var chartData = d3.timeDays(yearAgo, now).map(function (dateElement) {
            return {
                date: dateElement,
                count: (dateElement.getDay() !== 0 && dateElement.getDay() !== 6) ? Math.floor(Math.random() * 6000000) : Math.floor(Math.random() * 10)
            };
        });

        

        var chart1 = calendarHeatmapMini()
            .data(chartData)
            .selector('#heatmap1')
            .colorRange(['#D8E6E7', '#218380'])
            .tooltipEnabled(true)
            .legendEnabled(true)
            .onClick(function (data) {
                console.log('onClick callback. Data:', data);
            });

        chart1();

        
    </script>