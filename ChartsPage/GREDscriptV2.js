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
		  
		  
        };

		    var chart = new google.visualization.ChartWrapper({
         containerId: 'chart1'
     });
		 var barsButton = document.getElementById('b1');
		 var lineButton = document.getElementById('b2');

		 
		chart.setOptions(options);
		 function drawBars() {
			 chart.setChartType('ColumnChart');
			 chart.setDataTable(view);
			 chart.draw();
		 }

		 function drawLine() {
			 chart.setChartType('LineChart');
			 chart.setDataTable(view);
			 chart.draw();
		 }

		 barsButton.onclick = function () {
			 drawBars();
		 }

		 lineButton.onclick = function () {
			 drawLine();
		 }
		 drawBars();
		
	  }
		