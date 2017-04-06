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
        var view = new google.visualization.DataView(data);

        // Create a dashboard.
        var dashboard = new google.visualization.Dashboard(
            document.getElementById('dashboard_div'));

        // Create a time selector, passing some options
        var timeFilter = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'filter_div',
          'options': {
            'filterColumnLabel': 'Time',
            'ui': {
              'allowTyping': false,
              'allowMultiple': true,
              'orientation': 'horizontal',
              'showRangeValues': false,
              'label': 'Time Range'
            }
          } 
        });

       var selector = document.getElementById('format-select');

       selector.onchange = function() {
          view.setColumns([0,+this.value])
          dashboard.draw(view);
       }

        // Create a column chart, passing some options
        var dataChart = new google.visualization.ChartWrapper({
          'chartType': 'ColumnChart',
          'containerId': 'chart_div',
          'options': {
            'width': 1600,
            'height': 500,
            chartArea: {width: '50%'}
          }
        });

        // Establish dependencies, declaring that 'timeFilter' drives 'dataTable',
        // and the 'dataTable' drives 'dataChart',
        // so that the chart and table will only display entries that are let through
        // given the Independent Variable chosen by the   user.
        dashboard.bind(timeFilter, dataChart);

        // Draw the dashboard.
        dashboard.draw(view);
      }
		
