google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
		
		
		var jsonData = $.ajax({
        url: "sampleData.json",
		type:'get',
        dataType: "json",
        async: false
        }).responseText;
		
		var data = new google.visualization.DataTable(jsonData);
		
	
         var options = {
		  title: 'Cool Chart',
		  colors:['#3f3f3f', '#199EDA'],
		  chartArea: {top: 30, left: 80, width: 490, height: 300},
		  height: 500,
		  width: 710,
		  
		  
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart1'));

        chart.draw(data, options);
      }