google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
		
		
		var jsonData = $.ajax({
        url: "Data.json",
		type:'get',
        dataType: "json",
        async: false
        }).responseText;
		
		var data = new google.visualization.DataTable(jsonData);
		var view = new google.visualization.DataView(data);
		view.setColumns([0,2])
		
		
		
         var options = {
		  title: 'Cool Chart',
		  colors:['#3f3f3f', '#199EDA'],
		  width: 800,
		  height: 500,
		  vAxis: { gridlines: { count: 10} }
		  
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart1'));

        chart.draw(view, options);
      }