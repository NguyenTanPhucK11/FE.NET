$(document).ready(function(){
    $("#datepicker").change(function(){
        var  _dataPoints;
       
        switch(document.getElementById("datepicker").value){
            case "05/2020":
                _dataPoints =  [
                    { label: "Iraq", y: 15.09 },	
                    { label: "Turks & Caicos Islands", y: 9.40 },	
                    { label: "Nauru", y: 8.50 },
                    { label: "Ethiopia", y: 7.96 },	
                    { label: "Uzbekistan", y: 7.80 },
                    { label: "Nepal", y: 7.56 },
                    { label: "Iceland", y: 7.20 },
                    { label: "India", y: 7.1 }
                ]
                break;
            case "06/2020":
                _dataPoints =  [
                    { label: "Iraq", y: 20.09 },	
                    { label: "Turks & Caicos Islands", y: 9.40 },	
                    { label: "Nauru", y: 8.50 },
                    { label: "Ethiopia", y: 7.96 },	
                    { label: "Uzbekistan", y: 7.80 },
                    { label: "Nepal", y: 7.56 },
                    { label: "Iceland", y: 7.20 },
                    { label: "India", y: 7.1 }
                ]
                break;
            case "07/2020":
                _dataPoints =  [
                    { label: "Iraq", y: 30.09 },	
                    { label: "Turks & Caicos Islands", y: 9.40 },	
                    { label: "Nauru", y: 8.50 },
                    { label: "Ethiopia", y: 7.96 },	
                    { label: "Uzbekistan", y: 7.80 },
                    { label: "Nepal", y: 7.56 },
                    { label: "Iceland", y: 7.20 },
                    { label: "India", y: 7.1 }
                ]
                break;
            default:    
                _dataPoints = [
                    { label: "Iraq", y: 0 },
                    { label: "Turks & Caicos Islands", y: 0 },
                    { label: "Nauru", y: 0 },
                    { label: "Ethiopia", y: 0 },
                    { label: "Uzbekistan", y: 0 },
                    { label: "Nepal", y: 0 },
                    { label: "Iceland", y: 0 },
                    { label: "India", y: 0 }
                ]
                break;
        }
            
        
            var options = {
                animationEnabled: true,
                title: {
                    text: "GDP Growth Rate -" + document.getElementById("datepicker").value
                },
                axisY: {
                    title: "Growth Rate (in %)",
                    suffix: "%",
                    includeZero: false
                },
                axisX: {
                    title: "Countries"
                },
                data: [{
                    type: "column",
                    yValueFormatString: "#,##0.0#"%"",
                    dataPoints: _dataPoints
                }]
            };
            $("#chartContainer").CanvasJSChart(options);
    });
    
  });
        window.onload = function () {
            var today = new Date();
            if(today.getMonth() < 10)
                var time = "0" + (today.getMonth()+1) + "/" + today.getFullYear();
            else
                var time = (today.getMonth()+1) + "/" + today.getFullYear();
            
            document.getElementById("datepicker").value = time;
            var options = {
                animationEnabled: true,
                title: {
                    text: "GDP Growth Rate -"
                },
                axisY: {
                    title: "Growth Rate (in %)",
                    suffix: "%",
                    includeZero: false
                },
                axisX: {
                    title: "Countries"
                },
                data: [{
                    type: "column",
                    yValueFormatString: "#,##0.0#"%"",
                    dataPoints: [
                        { label: "Iraq", y: 10.09 },	
                        { label: "Turks & Caicos Islands", y: 9.40 },	
                        { label: "Nauru", y: 8.50 },
                        { label: "Ethiopia", y: 7.96 },	
                        { label: "Uzbekistan", y: 7.80 },
                        { label: "Nepal", y: 7.56 },
                        { label: "Iceland", y: 7.20 },
                        { label: "India", y: 7.1 },
                    ]
                }]
            };
            $("#chartContainer").CanvasJSChart(options);
            }