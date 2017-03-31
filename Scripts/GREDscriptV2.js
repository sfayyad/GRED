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
		  title: 'Cool Graph',
		  colors:['#3f3f3f', '#199EDA'],
		  width: 800,
		  height: 500,
        };
		
		var chartOptions = {
		   title: 'Cool Chart',
		   colors:['#3f3f3f', '#199EDA'],
		   width: 300,
		   height: 300,
		};

		    var chart = new google.visualization.ChartWrapper({
         containerId: 'chart1'
     }); 	
			var sideChart = new google.visualization.ChartWrapper({
         containerId: 'chart2'
     });
			
	 
		 var barsButton = document.getElementById('b1');
		 var lineButton = document.getElementById('b2');

		 function drawDashboard(){
			var sideChart = google.visualization.DataTable(view); 
			var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
			
			var filter = new google.visualization.ControlWrapper({
				'controlType': 'CategoryFilter',
				'containerId': 'filterID',
				'options': {
					'filterColumnLabel': 'Column Label',
					'ui': {
						'allowingTyping': false,
						'allowingMultipple': true,
						'orientation': 'horizontal',
						'showRangeValues': false,
						'label': ''
					}
				}
				
			});	
		 }
		 
		 
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
		 
		 sideChart.setOptions(chartOptions);
		 function drawChart() {
			sideChart.setChartType('Table');
			sideChart.setDataTable(view);
			sideChart.draw();
		 }

		 barsButton.onclick = function () {
			 drawBars();
		 }

		 lineButton.onclick = function () {
			 drawLine();
		 }
		 drawBars();
		 drawChart();
		
	  }
		
