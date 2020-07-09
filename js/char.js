$(document).ready(function(){
    $("#datepicker").change(function(){
        
        if(document.getElementById("exampleRadios1").checked == true){
            var str = document.getElementById("datepicker").value;
        var Year = str.substring(str.length - 4, str.length);
        switch(Year){
            case "2018":
                _dataPointsYear =  [
                    { label: "Laptop", y: 15.09 },	
                    { label: "Tablet", y: 9.40 },	
                    { label: "Phone", y: 8.50 },
                    { label: "Recorder", y: 7.96 },	
                    { label: "Player Music", y: 7.80 },
                    { label: "Camera", y: 7.56 },
                    { label: "Television", y: 7.20 },
                ]
                break;
            case "2019":
                _dataPointsYear =  [
                    { label: "Laptop", y: 20.09 },	
                    { label: "Tablet", y: 9.40 },	
                    { label: "Phone", y: 8.50 },
                    { label: "Recorder", y: 7.96 },	
                    { label: "Player Music", y: 7.80 },
                    { label: "Camera", y: 7.56 },
                    { label: "Television", y: 7.20 },
                ]
                break;
            case "2020":
                _dataPointsYear =  [
                    { label: "Laptop", y: 30.09 },	
                    { label: "Tablet", y: 9.40 },	
                    { label: "Phone", y: 8.50 },
                    { label: "Recorder", y: 7.96 },	
                    { label: "Player Music", y: 7.80 },
                    { label: "Camera", y: 7.56 },
                    { label: "Television", y: 7.20 },
                ]
                break;
            default:    
                _dataPointsYear = [
                    { label: "Laptop", y: 0 },
                    { label: "Tablet", y: 0 },
                    { label: "Phone", y: 0 },
                    { label: "Recorder", y: 0 },
                    { label: "Player Music", y: 0 },
                    { label: "Camera", y: 0 },
                    { label: "Television", y: 0 },
                ]
                break;
        }
          
            var optionsYear = {
                animationEnabled: true,
                title: {
                    text: "Statistical - " + Year
                },
                axisY: {
                    title: "Statistical (in %)",
                    suffix: "%",
                    includeZero: false
                },
                axisX: {
                    title: "Countries"
                },
                data: [{
                    type: "column",
                    yValueFormatString: "#,##0.0#"%"",
                    dataPoints: _dataPointsYear
                }]
            };
            $("#chartContainerYear").CanvasJSChart(optionsYear);      
        }
        else {
            var  _dataPoints;
            var  _dataPointsYear;
            switch(document.getElementById("datepicker").value){
                case "05/2020":
                    _dataPoints =  [
                        { label: "Laptop", y: 15.09},	
                        { label: "Tablet", y: 9.40 },	
                        { label: "Phone", y: 8.50 },
                        { label: "Recorder", y: 7.96 },	
                        { label: "Player Music", y: 7.80 },
                        { label: "Camera", y: 7.56 },
                        { label: "Television", y: 7.20 },

                    ]        
                    break;
                case "06/2020":
                    _dataPoints =  [
                        { label: "Laptop", y: 20.09 },	
                        { label: "Tablet", y: 9.40 },	
                        { label: "Phone", y: 8.50 },
                        { label: "Recorder", y: 7.96 },	
                        { label: "Player Music", y: 7.80 },
                        { label: "Camera", y: 7.56 },
                        { label: "Television", y: 7.20 },

                    ]
                    break;
                case "07/2020":
                    _dataPoints =  [
                        { label: "Laptop", y: 30.09 },	
                        { label: "Tablet", y: 9.40 },	
                        { label: "Phone", y: 8.50 },
                        { label: "Recorder", y: 7.96 },	
                        { label: "Player Music", y: 7.80 },
                        { label: "Camera", y: 7.56 },
                        { label: "Television", y: 7.20 },

                    ]
                    break;
                default:    
                    _dataPoints = [
                        { label: "Laptop", y: 0 },
                        { label: "Tablet", y: 0 },
                        { label: "Phone", y: 0 },
                        { label: "Recorder", y: 0 },
                        { label: "Player Music", y: 0 },
                        { label: "Camera", y: 0 },
                        { label: "Television", y: 0 },
                    ]
                    break;
            }
            var options = {
                animationEnabled: true,
                title: {
                    text: "Statistical - " + document.getElementById("datepicker").value
                },
                axisY: {
                    title: "Statistical (in %)",
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
            
        }
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
                    text: "Statistical - "+ time
                },
                axisY: {
                    title: "Statistical (in %)",
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
                        { label: "Laptop", y: 10.09 },	
                        { label: "Tablet", y: 9.40 },	
                        { label: "Phone", y: 8.50 },
                        { label: "Recorder", y: 7.96 },	
                        { label: "Player Music", y: 7.80 },
                        { label: "Camera", y: 7.56 },
                        { label: "Television", y: 7.20 },
                    ]
                }]
            };
            $("#chartContainer").CanvasJSChart(options);
            var optionsYear = {
                animationEnabled: true,
                title: {
                    text: "Statistical - 2020"
                },
                axisY: {
                    title: "Statistical (in %)",
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
                        { label: "Year", y: 20.09 },	
                        { label: "Tablet", y: 9.40 },	
                        { label: "Phone", y: 8.50 },
                        { label: "Recorder", y: 17.96 },	
                        { label: "Player Music", y: 7.80 },
                        { label: "Camera", y: 7.56 },
                        { label: "Television", y: 17.20 },
                  ,
                    ]
                }]
            };
            
            $("#chartContainerYear").CanvasJSChart(optionsYear);
}