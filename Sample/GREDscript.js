
      var w = window.innerWidth;
      var h = window.innerHeight;
      
      addCSSRule(document.styleSheets[0], ".chart1", "height:"+(h*0.45)+"px",0);
      addCSSRule(document.styleSheets[0], ".chart2", "height:"+(h*0.45)+"px",0);
      addCSSRule(document.styleSheets[0], ".chart4", "height:"+(h*0.45)+"px",0);
      addCSSRule(document.styleSheets[0], ".dash", "height:"+(h*0.45)+"px",0);


      google.charts.load('current', {'packages':['corechart', 'controls']});
      google.charts.setOnLoadCallback(function (){
		$.get("ENV_Hrly_2017.txt",drawGraphs);	      
      });


function loadXMLDoc(theURL)
    {
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                alert(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", theURL, false);
        xmlhttp.send();
    };

    loadXMLDoc("http://greddata.greenhillsschool.org/Datalog/ENV_Hrly_2017.txt");  

      function drawGraphs(datastr){
      
          
    //    dataStr = parseDate (dataStr);
      
        var data = new google.visualization.DataTable( dataStr );   
        var view = new google.visualization.DataView(data);
        var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
//        var view = new google.visualization.DataView(dataStr);

        view.setColumns([0,1,2,3]);
        var lineChart1 = new google.visualization.ChartWrapper({
                               chartType: 'LineChart',
                               containerId: 'chart1_div',
                               options: {
//                                             title: 'Temperature (\u{00B0}C)',
                                             curveType: 'function',
                                             legend: { position: 'bottom' },
                                             vAxis : {format: 'short',
                                                      title: 'Temperature (\u{00B0}C)',
                                                     },
                                             hAxis : {viewWindow: {
                                                                   min: view.getValue(0,0),
                                                                   max: view.getValue(view.getNumberOfRows() - 1,0)
                                                                  },
                                                      gridlines: {
                                                                  count: -1,
                                                                  units: {
                                                                           days: {format: ['MMM dd']},
                                                                           hours: {format: ['HH:mm', 'ha']},
                                                                         }
                                                                },
                                                      minorGridlines: {
                                                                   count: 1,
                                                                   units: {
                                                                   hours: {format: ['hh:mm:ss a', 'ha']},
                                                                   minutes: {format: ['HH:mm a Z', ':mm']}
                                                                   }
                                                                }
                                                      },

                                             chartArea:{left:'10%',top:'8%',width:'80%',height:'75%'},
                                             animation:{
                                                         duration: 1000,
                                                         easing: 'out',
                                                       }
                                          },
                               dataTable: view
                        });
//        lineChart1.Query('https://spreadsheets.google.com/tq?key=pCQbetd-CptHnwJEfo8tALA').send(queryCallback);
        lineChart1.draw();
        view.setColumns([0,4]);        
        var lineChart2 = new google.visualization.ChartWrapper({
                               chartType: 'LineChart',
                               containerId: 'chart2_div',
                               options: {
                                             curveType: 'function',
                                             legend: 'none',
                                             vAxis : {format: 'short',
                                                      title: 'Solar Radiance (W/m\u00B2)'
                                                     },       
                                             hAxis : {viewWindow: {
                                                                   min: view.getValue(0,0),
                                                                   max: view.getValue(view.getNumberOfRows() - 1,0)
                                                                  },
                                                      gridlines: {
                                                                  count: -1,
                                                                  units: {
                                                                           days: {format: ['MMM dd']},
                                                                           hours: {format: ['HH:mm', 'ha']},
                                                                         }
                                                                },
                                                      minorGridlines: {
                                                                   count: 1,
                                                                   units: {
                                                                   hours: {format: ['hh:mm:ss a', 'ha']},
                                                                   minutes: {format: ['HH:mm a Z', ':mm']}
                                                                   }
                                                                }
                                                      },
                                                      
                                                      chartArea:{left:'10%',top:'8%',width:'80%',height:'75%'},
                                                      animation:{
                                                         duration: 0,
                                                         easing: 'out',
                                                       }
                                                      
                                          },
                               dataTable: view
                        });
                        
 //        google.visualization.events.addListener(lineChart2, 'onClick', selectChart);                        
                        
        lineChart2.draw();
        
        view.setColumns([0,5]);                 
        var lineChart3 = new google.visualization.ChartWrapper({
                               chartType: 'LineChart',
                               containerId: 'chart3_div',
                               options: {
                                             curveType: 'function',
                                             legend: 'none',
                                             vAxis : {format: 'short',
                                                      title: 'Wind Speed (mph)'
                                                     },       
                                             hAxis : {
                                                      gridlines: {
                                                                  count: -1,
                                                                  units: {
                                                                           days: {format: ['MMM dd']},
                                                                           hours: {format: ['HH:mm', 'ha']},
                                                                         }
                                                                },
                                                      minorGridlines: {
                                                                   count: 1,
                                                                   units: {
                                                                   hours: {format: ['hh:mm:ss a', 'ha']},
                                                                   minutes: {format: ['HH:mm a Z', ':mm']}
                                                                   }
                                                                }
                                                      },
                                                      
                                                      chartArea:{left:'10%',top:'8%',width:'80%',height:'85%'},
                                                      animation:{
                                                         duration: 0,
                                                         easing: 'out',
                                                       }
                                                      
                                          },
//                               'view': {'columns': [0, 1]}
                        });
         
  var rangeSlider = new google.visualization.ControlWrapper({
    'controlType': 'ChartRangeFilter',
    'containerId': 'slider_div',
    'options': {
      'filterColumnLabel': 'Time'
    },
    'view': {'columns': [0, 5]}
  });         
 //        lineChart3.draw();
        dashboard.bind(rangeSlider, lineChart3);
        dashboard.draw(data);
        $('#load').hide();
        
        view.setColumns([0,6]);                 
        var lineChart4 = new google.visualization.ChartWrapper({
                               chartType: 'LineChart',
                               containerId: 'chart4_div',
                               options: {
                                             curveType: 'function',
                                             legend: 'none',
                                             vAxis : {format: 'short',
                                                      title: 'Barometer (inHg)'
                                                     },       
                                             hAxis : {viewWindow: {
                                                                   min: view.getValue(0,0),
                                                                   max: view.getValue(view.getNumberOfRows() - 1,0)
                                                                  },
                                                      gridlines: {
                                                                  count: -1,
                                                                  units: {
                                                                           days: {format: ['MMM dd']},
                                                                           hours: {format: ['HH:mm', 'ha']},
                                                                         }
                                                                },
                                                      minorGridlines: {
                                                                   count: 1,
                                                                   units: {
                                                                   hours: {format: ['hh:mm:ss a', 'ha']},
                                                                   minutes: {format: ['HH:mm a Z', ':mm']}
                                                                   }
                                                                }
                                                      },
                                                      
                                                      chartArea:{left:'10%',top:'8%',width:'80%',height:'75%'},
                                                      animation:{
                                                         duration: 0,
                                                         easing: 'out',
                                                       }
                                                      
                                          },
                               dataTable: view
                        });
         
         lineChart4.draw();
	      
	 drawToolbar();
         
         
         var button1 = document.getElementById('change');


         document.getElementById('chart1_div').ondblclick = focusChart1;
         document.getElementById('chart2_div').ondblclick = focusChart2;
         document.getElementById('dashboard_div').ondblclick = focusChart3;
         document.getElementById('chart4_div').ondblclick = focusChart4;
         
         var isChanged = false;
         var isChanged1 = false;
         var isChanged2 = false;
         var isChanged3 = false;
         var isChanged4 = false;
                   
          function windowChart () {
          if (!isChanged) {
            lineChart1.setOption('hAxis.viewWindow.min', new Date(2017, 0, 1));
            lineChart1.setOption('hAxis.viewWindow.max', new Date(2017, 0, 3));
            lineChart2.setOption('hAxis.viewWindow.min', new Date(2017, 0, 1));
            lineChart2.setOption('hAxis.viewWindow.max', new Date(2017, 0, 3));
            lineChart1.setOption('animation.duration',400);
            lineChart2.setOption('animation.duration',400);
                        
            isChanged = true;
          } else {
            lineChart1.setOption('hAxis.viewWindow.min', view.getValue(0,0));
            lineChart1.setOption('hAxis.viewWindow.max', view.getValue(view.getNumberOfRows() - 1,0));
            lineChart2.setOption('hAxis.viewWindow.min', view.getValue(0,0));
            lineChart2.setOption('hAxis.viewWindow.max', view.getValue(view.getNumberOfRows() - 1,0));
            lineChart1.setOption('animation.duration',400);
            lineChart2.setOption('animation.duration',400);
                        
            isChanged = false;
          }
          view.setColumns([0,1,2,3]);
          lineChart1.draw();
          view.setColumns([0,4]);        
          lineChart2.draw();
          
         };

          button1.onclick = windowChart;

          
          function focusChart2() {
 
          if (!isChanged2) {
             lineChart1.setOption('animation.duration',0);
             lineChart2.setOption('animation.duration',0);
             lineChart3.setOption('animation.duration',0);
             lineChart4.setOption('animation.duration',0);
             
             $("#chart2_div").animate({
                                        top:"10%",
                                        width: "75%",
                                        height:"80%",
                                        left: "20%"
                                         }, { duration: 100 ,progress: function(animation, progress, remainingMs){view.setColumns([0,4]); lineChart2.draw();}});
             $("#chart1_div").animate({
                                        top:"5%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 100 ,progress: function(animation, progress, remainingMs){view.setColumns([0,1,2,3]); lineChart1.draw();}});
             $("#dashboard_div").animate({
                                        top:"30%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 100 ,progress: function(animation, progress, remainingMs){dashboard.draw(data);}});
             $("#chart4_div").animate({
                                        top:"55%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 100 ,progress: function(animation, progress, remainingMs){view.setColumns([0,6]); lineChart4.draw();}});
                                         
            isChanged2 = true;
            isChanged1 = false;
            isChanged3 = false;
            isChanged4 = false;            
            
          } else {
             lineChart1.setOption('animation.duration',0);
             lineChart2.setOption('animation.duration',0);
             lineChart3.setOption('animation.duration',0);
             lineChart4.setOption('animation.duration',0);
             $("#chart1_div").animate({
                                        top:"5%",
                                        width: "40%",
                                        height:"45%",
                                        left: "5%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,1,2,3]); lineChart1.draw();}});       
             $("#chart2_div").animate({
                                        top:"50%",
                                        width: "40%",
                                        height:"45%",
                                        left: "5%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,4]); lineChart2.draw();}});
             $("#dashboard_div").animate({
                                        top:"5%",
                                        width: "40%",
                                        height:"45%",
                                        left: "50%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){dashboard.draw(data);}});
             $("#chart4_div").animate({
                                        top:"50%",
                                        width: "40%",
                                        height:"45%",
                                        left: "50%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,6]); lineChart4.draw();}});
            isChanged1 = false;
            isChanged2 = false;
            isChanged3 = false;
            isChanged4 = false;
            
          }

         };

          function focusChart1() {
             lineChart1.setOption('animation.duration',0);
             lineChart2.setOption('animation.duration',0);
             lineChart3.setOption('animation.duration',0);
             lineChart4.setOption('animation.duration',0);
 
          if (!isChanged1) {
              $("#chart1_div").animate({
                                        top:"10%",
                                        width: "75%",
                                        height:"80%",
                                        left: "20%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,1,2,3]); lineChart1.draw();}});
             $("#chart2_div").animate({
                                        top:"5%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,4]); lineChart2.draw();}});
             $("#dashboard_div").animate({
                                        top:"30%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){dashboard.draw(data);}});
             $("#chart4_div").animate({
                                        top:"55%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,6]); lineChart4.draw();}});
            isChanged1 = true;
            isChanged2 = false;
            isChanged3 = false;
            isChanged4 = false;            
          } else {
            $("#chart1_div").animate({
                                        top:"5%",
                                        width: "40%",
                                        height:"45%",
                                        left: "5%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,1,2,3]); lineChart1.draw();}});       
             $("#chart2_div").animate({
                                        top:"50%",
                                        width: "40%",
                                        height:"45%",
                                        left: "5%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,4]); lineChart2.draw();}});
             $("#dashboard_div").animate({
                                        top:"5%",
                                        width: "40%",
                                        height:"45%",
                                        left: "50%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){dashboard.draw(data);}});
             $("#chart4_div").animate({
                                        top:"50%",
                                        width: "40%",
                                        height:"45%",
                                        left: "50%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,6]); lineChart4.draw();}});
                                         
            isChanged1 = false;
            isChanged2 = false;
            isChanged3 = false;
            isChanged4 = false;
          }

         };

          function focusChart3() {
             lineChart1.setOption('animation.duration',0);
             lineChart2.setOption('animation.duration',0);
             lineChart3.setOption('animation.duration',0);
             lineChart4.setOption('animation.duration',0);

          if (!isChanged3) {
             $("#dashboard_div").animate({
                                        top:"10%",
                                        width: "75%",
                                        height:"80%",
                                        left: "20%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){dashboard.draw(data);}});
             $("#chart1_div").animate({
                                        top:"5%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,1,2,3]); lineChart1.draw();}});
             $("#chart2_div").animate({
                                        top:"30%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,4]); lineChart2.draw();}});
             $("#chart4_div").animate({
                                        top:"55%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,6]); lineChart4.draw();}});

            isChanged3 = true;
            isChanged1 = false;
            isChanged2 = false;
            isChanged4 = false;            
          } else {
            $("#chart1_div").animate({
                                        top:"5%",
                                        width: "40%",
                                        height:"45%",
                                        left: "5%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,1,2,3]); lineChart1.draw();}});       
             $("#chart2_div").animate({
                                        top:"50%",
                                        width: "40%",
                                        height:"45%",
                                        left: "5%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,4]); lineChart2.draw();}});
             $("#dashboard_div").animate({
                                        top:"5%",
                                        width: "40%",
                                        height:"45%",
                                        left: "50%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){dashboard.draw(data);}});
             $("#chart4_div").animate({
                                        top:"50%",
                                        width: "40%",
                                        height:"45%",
                                        left: "50%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,6]); lineChart4.draw();}});
                                         
            isChanged1 = false;
            isChanged2 = false;
            isChanged3 = false;
            isChanged4 = false;
          }

         };

          function focusChart4() {
             lineChart1.setOption('animation.duration',0);
             lineChart2.setOption('animation.duration',0);
             lineChart3.setOption('animation.duration',0);
             lineChart4.setOption('animation.duration',0);
 
          if (!isChanged4) {
             $("#chart4_div").animate({
                                        top:"10%",
                                        width: "75%",
                                        height:"80%",
                                        left: "20%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,6]); lineChart4.draw();}});
             $("#chart1_div").animate({
                                        top:"5%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,1,2,3]); lineChart1.draw();}});
             $("#chart2_div").animate({
                                        top:"30%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){view.setColumns([0,4]); lineChart2.draw();}});
             $("#dashboard_div").animate({
                                        top:"55%",
                                        width: "15%",
                                        height:"20%",
                                        left: "2%"
                                         }, { duration: 200 ,progress: function(animation, progress, remainingMs){dashboard.draw(data);}});
            isChanged4 = true;
            isChanged1 = false;
            isChanged2 = false;
            isChanged3 = false;            
          } else {
            $("#chart1_div").animate({
                                        top:"5%",
                                        width: "40%",
                                        height:"45%",
                                        left: "5%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,1,2,3]); lineChart1.draw();}});       
             $("#chart2_div").animate({
                                        top:"50%",
                                        width: "40%",
                                        height:"45%",
                                        left: "5%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,4]); lineChart2.draw();}});
             $("#dashboard_div").animate({
                                        top:"5%",
                                        width: "40%",
                                        height:"45%",
                                        left: "50%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){dashboard.draw(data);}});
             $("#chart4_div").animate({
                                        top:"50%",
                                        width: "40%",
                                        height:"45%",
                                        left: "50%"
                                         }, { duration: 200, progress: function(animation, progress, remainingMs){view.setColumns([0,6]); lineChart4.draw();}});
                                             
            isChanged1 = false;
            isChanged2 = false;
            isChanged3 = false;
            isChanged4 = false;
          }

         };





      }
      
    function drawToolbar() {
      var components = [
          {type: 'html', datasource: 'https://dpkhan.github.io/GREDdata/ENV_Hrly_2017.txt'},
          {type: 'csv', datasource: 'https://dpkhan.github.io/GREDdata/ENV_Hrly_2017.txt'}
      ];

      var container = document.getElementById('toolbar_div');
      google.visualization.drawToolbar(container, components);
    };

      
      function parseDate(data)
      {
       for (var i=0; i<data.length; i++)
         {
           var temp = ""+data[i][0];
           var temp1 = temp.split(" "); 
           var dateS = temp1[2].split("/");
           var timeS = temp1[0].split(":");
           if ((temp1[1] == "PM") && (parseInt(timeS[0],10) != 12) )
           {
             timeS[0] = parseInt(timeS[0],10)+12; 
           }else if ((temp1[1] == "AM") && (parseInt(timeS[0],10) == 12))
           {
//             timeS[0] = parseInt(timeS[0],10)-10;
               timeS[0] = 0;
           } else
           {
             timeS[0] = parseInt(timeS[0],10);
           };
           var milliS = timeS[2].split(".");
           timeS[1] = parseInt(timeS[1],10);
           dateS[0] = parseInt(dateS[0],10);dateS[1] = parseInt(dateS[1],10);
           milliS[0] = parseInt(milliS[0],10);milliS[1] = parseInt(milliS[1],10);  
           var temp2 = dateS[2]+"-"+dateS[0]+"-"+dateS[1]+"T"+timeS[0]+":"+timeS[1]+":"+milliS[0]+":"+milliS[1]+"-05:00";
           data[i][0] = new Date(dateS[2],(dateS[0]-1),dateS[1],timeS[0],timeS[1],milliS[0],milliS[1]);
         };
/*
         data.unshift([{label:'Time',type:'string'},{label:'Wind Direction',type:'number'},{label:'Duration',type:'number'},
         {label:'Outside Temperature',type:'number'},{label:'Wind Chill',type:'number'},{label:'Heat Index',type:'number'},
         {label:'Dew Point',type:'number'},{label:'Outside Humidity',type:'number'},{label:'Wind Speed',type:'number'},
         {label:'Rain Rate',type:'number'},{label:'Barometer',type:'number'},{label:'Solar Radiance',type:'number'},
         {label:'Green Roof Temp',type:'number'},{label:'White Roof Temp',type:'number'},{label:'Outside Temp Min',type:'number'},
         {label:'Wind Chill Min',type:'number'},{label:'Heat Index Min',type:'number'},{label:'Dew Point Min',type:'number'},
         {label:'Outside Humidity Min',type:'number'}]);
 */
         data.unshift([{label:'Time',type:'datetime'},{label:'Outside Temp',type:'number'},{label:'Green Roof Temp',type:'number'},{label:'White Roof Temp',type:'number'},{label:'Solar Radiance',type:'number'},{label:'Wind Speed',type:'number'},{label:'Barometer',type:'number'}]);
  
         return data;
      }
      
      function addCSSRule(sheet, selector, rules, index) 
      {
         if("insertRule" in sheet) 
         {
		     sheet.insertRule(selector + "{" + rules + "}", index);
	     }else if("addRule" in sheet) 
         {
		    sheet.addRule(selector, rules, index);
	     }
      }
