  // Load the Visualization API and the controls package.
      google.charts.load('current', {'packages':['corechart', 'controls']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawDashboard);

      // Callback that creates and populates a data table,
      // instantiates a dashboard, a range slider and a pie chart,
      // passes in the data and draws it.
      function drawDashboard() {

        // Create our data table.
        var jsonData = $.ajax({
        url: "Data.json",
		    type:'get',
        dataType: "json",
        async: false
        }).responseText; 

        var data = new google.visualization.DataTable(jsonData);

        // Create a dashboard.
        var dashboard = new google.visualization.Dashboard(
            document.getElementById('dashboard_div'));

        // Create a range slider, passing some options
        var filter = new google.visualization.ControlWrapper({
          'controlType': 'StringFilter',
          'containerId': 'filter_div',
          'options': {
            'filterColumnLabel': 'Time'
          } 
        });

        // Create a pie chart, passing some options
        var dataChart = new google.visualization.ChartWrapper({
          'chartType': 'ColumnChart',
          'containerId': 'chart_div',
          'options': {
            'width': 1600,
            'height': 500,
            chartArea: {width: '50%'}
          }
        });

        // Establish dependencies, declaring that 'filter' drives 'dataChart',
        // so that the pie chart will only display entries that are let through
        // given the chosen slider range.
        dashboard.bind(filter, dataChart);

        // Draw the dashboard.
        dashboard.draw(data);
      }


		
